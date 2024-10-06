---
title: Run an Autonomys Node on Docker
---

:::warning

This guide was creating for Gemeni 3H testnet and will be updated to Mainnet once released.

:::

## Introduction
To run an Autonomys Node on Docker make sure your hardware and OS are supported [Official Docs](https://docs.autonomys.xyz/docs/farming-&-staking/farming/intro#operating-system)

Here are a few quick things to keep in mind:
1. You will need at least 100GB of SSD storage for a Farming Node.
1. You will need to forward two ports: 30333 and 30433
1. The Node will need to be accessible by any PCs running a Cluster Controller, or if you do not run a cluster, then by the Farmer.

You should have Docker or Docker Desktop installed. 
1. [Install Docker on Debian](https://hakehardware.github.io/docs/guides/linux/install-docker-debian)

This guide also uses Portainer to manage Docker.

## Forward Ports
Port forwarding allows you to map a specific port on your public IP address to a particular internal IP address. This tells your router to forward incoming requests on that port to the specified internal IP. Forwarding ports varies based on the type of equipment and configuration you have. Most of the time simply navigating to the router or modem UI you can find the Port Forwarding section and configure it. However, that is not always the case. I recommend that you google your router/modem model number to identify the appropriate steps. There are a lot of resources out there already to help you out. 

I am using the UniFi Dream Machine Pro and there is a user interface that allows me to forward my ports easily

![Port Forward](/img/docker-node-autonomys/dream_machine_port_forward.png)

In the above example, you can see ports 30333 and 30433 map to the IP where my Node is running (192.168.69.100).

## Create an Autonomys Network in Docker
The first step is to create a dedicated network for Autonomys. This is especially a good idea if you plan to run a Node + Cluster on the same PC. You can do this with a Docker command:

```bash
sudo docker network create \
  --driver bridge \
  --subnet 172.25.0.0/16 \
  --gateway 172.25.0.1 \
  autonomys-network
```

This creates a new network called "autonomys-network" using the subnet 172.25.0.0/16 and the gateway 172.25.0.1.

![Network Create](/img/docker-node-autonomys/network-create.png)

## Node Stack File

I will be creating a dedicated stack file for my Node as this PC only runs the Node. But if you run a Node + Cluster you can include the containers in this stack file. This is covered in the Farmer guide so feel free to finish creating your Node following this guide, and we can add the Farmer stuff later.

Open up Portainer, select the environment you want to run the Node on, and then click "Stacks".

![Network Create](/img/docker-node-autonomys/stacks.png)

Then click "+ Add Stack". Add a name, I usually just call mine "autonomys". Move down to the Web editor and paste in the below yaml code

```yaml
services:
  node:
    container_name: autonomys_node
    image: ghcr.io/autonomys/node:gemini-3h-2024-oct-03 # Update to latest version
    volumes:
      -  node-data:/var/subspace:rw
    ports:
      - "0.0.0.0:30333:30333/tcp" # Remove if using default port
      - "0.0.0.0:30433:30433/tcp" # Remove if using default port
      - "9944:9944"
      - "9080:9080"
    restart: unless-stopped
    command:
      [
        "run",
        "--chain", "gemini-3h",
        "--base-path", "/var/subspace",
        "--listen-on", "/ip4/0.0.0.0/tcp/30333",
        "--dsn-listen-on", "/ip4/0.0.0.0/tcp/30433",
        "--rpc-cors", "all",
        "--rpc-methods", "unsafe",
        "--rpc-listen-on", "0.0.0.0:9944",
        "--prometheus-listen-on", "0.0.0.0:9080",
        "--farmer",
        "--name", "hakehardware_guide"
      ]
    networks:
      autonomys-network:
        ipv4_address: 172.25.0.100
    labels: # Optional for Space Port
      com.spaceport.name: "Autonomys Node"
    environment:
      - TZ=America/Phoenix

networks:
  autonomys-network:
    external: true

volumes:
  node-data:
```

A few things to note:
1. The first two entries under "ports" are not required if you are using the default ports. One situation you would not be using the default ports is if you are running more than one Node. For instance if you have Space Acres on a computer (which runs a node) and also running the Advanced CLI or Docker with a Node.
1. You can also remove the corresponding entries in the "command" section for the same reason
1. I have enabled prometheus metrics with `--promtheus-listen-on`. This is optional but recommended.
1. Update the `--name` to something relevant to you.
1. The "labels" section is optional, but you should keep it if you plan to run my Space Port monitoring app.
1. Update the timezone to your timezone

### Using a Bind Mount for Node Data
The above YAML code uses a named volume which will put the Node Data on your OS drive. If you have a seperate hard drive mounted you can explicitely specify the Node Data location with a bind mount.

Update the "volumes" section found in the node service from
```yaml
    volumes:
      -  node-data:/var/subspace:rw
```

to

```yaml
    volumes:
      -  /your/node/data/path:/var/subspace:rw
```

Note that this should be the full path to where you want the Node data. Then remove the "volumes" section at the bottom

```yaml
volumes:
  node-data:
```

Once you have your stack file ready, you can scroll down and click the "Deploy" button. At this point the image will be downloaded and all containers (just the Node for now) will be deployed, this may take a moment. Once completed, you will be redirected to the stacks page, click the "autonomys" stack to view the associated containers.

![Node Container](/img/docker-node-autonomys/node_container.png)

To view the logs, under the "Quick Actions" column, click the first icon that looks like a sheet of paper. This is really helpful to see how things are progressing. Initially you will see fust a few peers, but overtime they should increase to 40, give it a few hours though. If you are not seeing the peers increase then it may be an issue with port forwarding.

Next, you will see logs like:
```
2024-10-06T15:00:57.441368Z  INFO Consensus: substrate: ⚙️  Syncing  0.0 bps, target=#3589783 (4 peers), best: #0 (0x0c12…1c34), finalized #0 (0x0c12…1c34), ⬇ 13.5kiB/s ⬆ 3.9kiB/s
```

Let us dissect this a bit to see what is going on:
1. `Syncing  0.0 bps` - This is normal at first and we should see it increase
1. `target=#3589783` - This is the current block height, and will increase.
1. `(4 peers)` - Current peers. This should eventually increase to 40
1. `best: #0` - Our current synced blocks, this will eventually need to reach the `target`

The other parts are not super important right now. Eventually the snap sync will kick in and you will see a log like:

```
2024-10-06T15:05:37.481031Z  INFO Consensus: substrate: ⚙️  Syncing 711748.0 bps, target=#3589832 (6 peers), best: #3558740 (0x123e…cff3), finalized #3558740 (0x123e…cff3), ⬇ 219.0kiB/s ⬆ 2.0kiB/s
```

As you can see we had a HUGE jump in `best`. Unfortunately it will still require some syncing as we are only at `3558740` and we need to get to `3589832`. It should not take more than an hour or so to sync though. If it is taking longer than it could be due to the connections being blocked or port forwarding not set up correctly.

One way to make sure you have your ports forwarded correctly is to check on [you get signal](https://www.yougetsignal.com/tools/open-ports/). Just enter 30333 and 30433 and click "Check". 

And that is it! As mentioned earlier, it is quite simple to add Farmer containers to the existing stack file, and that is covered in the Farmer Guide.