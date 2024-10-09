---
title: Advanced Clusters
---

:::warning

This guide was created for Gemeni 3h testnet and will be updated to mainnet once released.

:::

## Introduction
Clusters can become pretty complicated as they grow. For the most part they scale well without doing too much work, but if your farm grows a lot then the potential for efficiencies and redundancies grows. 

## Multiple Controller/Cache Pairs
If you are running multiple Plotters in a Cluster it can be beneficial to run a Controller/Cache pair on each. Since the plotter needs to retrieve data from the Cache it makes sense to have a Cache on each plotter. I have not been able to fully test just how much faster plotting is by having a localized Cache, but in theory there are benfits. If you have an extra 100GB or so of space, you should see some improvement.

For each pair, you can create a `cache-group`. The relationship between a Controller and Cache is 1:N but each Controller must have it's own Cache. Again, the benefit of just running localized Cache, all connected to a single Controller, vs running local Controller/Cache has not been tested, but it does not cost much resources to a pair.

An example of a Cluster Plotter, running a localized Controller/Cache pair can be found on the [autonomys files repo](https://github.com/hakehardware/autonomys_files/blob/main/plotter_with_cache_group.yaml)
* [plotter_with_cache_group.yaml](https://github.com/hakehardware/autonomys_files/blob/main/plotter_with_cache_group.yaml)

I believe all Controllers must connect to the same node, so be sure to update the IP address for the Node. Also the above file assumes a single NATs instance, however in the next section we will talk about how to create a NATs cluster, which is a great option to combine with a Controller/Cache pair, allowing nearly full redundancy (Node is the weak spot).

## NATs Cluster
Although it uses the word Cluster, a NATs cluster is a feature of NATs and not Autonomys. To run a NATs cluster you must have a `seed server` and then N child servers. The `seed server` specifies the `cluster_name`, which must be specified then by all children.

An example can be found on the [Official NATs Documention](https://docs.nats.io/running-a-nats-service/configuration/clustering#running-a-simple-cluster)

On the Autonomys side, you will then need to specify each NATs IP address for your Cluster components. It is worth noting that a NATs cluster simply provides redundancy and not load balancing. 

We can use a Cluster Controller as an example, assuming we have three NATs containers as part of a NATs cluster: 192.168.69.100, 192.168.69.101, and 192.168.69.102, we would specify the following for our Controller:

```yaml
services:
  cluster_controller:
    container_name: cluster_controller
    image: ghcr.io/autonomys/farmer:<LATEST VERSION>
    restart: unless-stopped
    volumes:
      - /path/to/your/controller:/controller
    ports:
      - "9081:9081"
    command:
      [
        "cluster",
        "--nats-server", "nats://192.168.69.100:4222",
        "--nats-server", "nats://192.168.69.101:4222",
        "--nats-server", "nats://192.168.69.102:4222",
        "--prometheus-listen-on", "0.0.0.0:9081",
        "controller",
        "--base-path", "/controller",
        "--node-rpc-url", "ws://node:9944"
      ]
    labels:
      com.spaceport.name: "Controller"
    environment:
      - TZ=<YOUR TIMEZONE>
    networks:
      autonomys-network:
        ipv4_address: 172.25.0.102

networks:
  autonomys-network:
    external: true
```

A full example of a NATs `seed server` and `child server` can be found in these two files:
* [nats_seed_server.yaml](https://github.com/hakehardware/autonomys_files/blob/main/nats_seed_server.yaml)
* [nats_child_server.yaml](https://github.com/hakehardware/autonomys_files/blob/main/nats_child_server.yaml)

