---
title: Build Autonomys Images for COMET (CM3588)
---

## Introduction
There is no compatible Docker image for the COMET (CM3588), which requires users to build their own. This is a pretty simple process, we need to:
1. Clone the Autonomys Subspace Repository
1. Set up buildx
1. Build the Image
1. Use the image in our container

To do this you should have Docker installed
* [Install Docker on Debian](https://hakehardware.github.io/docs/guides/linux/install-docker-debian)

## Clone Repo
Currently, since mainnet is not live, we must clone the maintenance branch. This will not be required once mainnet is here
```bash
git clone --branch maintenance https://github.com/autonomys/subspace.git
```

## Set up buildx
Set up a buildx builder that supports multiple platforms
```bash
sudo docker buildx create --use
```

## Build the Image
We need to build the image for `linux/arm64` using the correct dockerfile (aarch64) for both the Farmer and the Node. Using the `--load` flag should store the image locally for use.

### Farmer
```bash
sudo docker buildx build --platform linux/arm64 --progress plain --load -t autonomys-comet-farmer:maintenance -f Dockerfile-farmer.aarch64 .


```

### Node
```bash
sudo docker buildx build --platform linux/arm64 --progress plain --load -t autonomys-comet-node:maintenance -f Dockerfile-node.aarch64 .
```
This process may take some time depending on the resources your PC has available. 