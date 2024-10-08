---
title: Monitoring Your Autonomys Containers with Grafana
---

:::warning

This guide was created for Gemeni 3h testnet and will be updated to mainnet once released.

:::

## Introduction
Monitoring your Autonomys Nodes and Clusters can be a bit of a pain as you scale up your hardware, but Grafana can help with that! To follow this guide there are a few prerequisites:
1. [Install Docker on Debian](https://hakehardware.github.io/docs/guides/linux/install-docker-debian)
1. [Install Portainer](https://hakehardware.github.io/docs/guides/linux/install-portainer-host-agent)
1. [Set up Grafana](https://hakehardware.github.io/docs/guides/linux/use-grafana-to-monitor-system)

## Enabling Prometheus Metrics

### Docker Users
To get metrics from your Node and/or Cluster, you need to turn on prometheus metrics. This can be added easily by including the `--prometheus-listen-on 0.0.0.0:<PORT>` in your stack/docker-compose files. Then make sure to expose the port. To see some examples check out some of the autonomys yaml files I have on my github.
* [autonomys files](https://github.com/hakehardware/autonomys_files)

Note that if you are running multiple Cluster components on a single PC, you need to enable metrics for each component, and use a different port for each one. An example of this is the `cluster-gpu.yaml` file on my github.
* [cluster-gpu.yaml](https://github.com/hakehardware/autonomys_files/blob/main/cluster-gpu.yaml)

![listen-on](/img/autonomys-grafana/listen-on.png)

Restart your containers after enabling Prometheus metrics.

### Non-Docker
TODO

## Update your Prometheus config
We need to add a new job in our Prometheus config for Autonomys. If you have multiple PCs you can add them all under this section. Open up your Prometheus config (if you followed my guide it is probably `~/prometheus/config.yaml`).

I will add a new job `autonomys` with a target containing the internal IP of my `comet-alpha` PC which is `192.168.69.111`. In my stack file I have metrics exposed on port `9083`. This PC is ONLY running a farmer.

![comet-alpha-farmer](/img/autonomys-grafana/comet-alpha-farmer.png)

:::info

If your Autonomys container is on the same PC as your Prometheus container, use the Gateway IP of the Docker network it is hosted on. Typically in my guides that would `172.25.0.1`.

:::

As always, save your config and restart Prometheus. You can check the "Targets" on the Prometheus Web UI to see a connection was able to be made.

![target-up](/img/autonomys-grafana/target-up.png)

## Grafana Dashboard

:::info

Depending on what targets you have added for your Autonomys components, not all dashboard components may load. For instance I only loaded the Cluster Farmer in the above example, and I do not get `Peers` because that is specific to a Node. 

:::

Open up Grafana and go to the Dashboards page, then click "New" and select "Import" from the dropdown. In the "URL or ID" input, paste in `20433` and click "Load". This is a pre-built dashboard by community member `zulkis`. 

I usually update the name, UID, and then make sure to select the correct prometheus instance. Then click "Import".

![dashboard-config](/img/autonomys-grafana/dashboard-config.png)

You should now see your Dashboard. 

![dashboard](/img/autonomys-grafana/dashboard.png)