---
title: Build Autonomys Images for COMET (CM3588)
---

:::info

This should not be necessary and is for informational purposes only. You can use the aarch64 image by adding `-aarch64` to the end and specifying `platform: linux/amd64` in the stack file. 

:::

## Introduction
If you want to build your own images for whatever reason, this is a pretty simple process. We need to:
1. Clone the Autonomys Subspace Repository
1. Set up buildx
1. Build the Image
1. Use the image in our container

To do this you should have Docker installed
* [Install Docker on Debian](https://hakehardware.github.io/docs/guides/linux/install-docker-debian)

##  Download Latest Version
Head over to [Autonomys Releases](https://github.com/autonomys/subspace/releases) and get the source from the latest release. Once you copy the link you can download it with wget
```bash
wget <LINK>
```

Then extract the tar with 
```bash
tar -xzvf <tar file>
```

Then cd into the directory that was created.
```bash
cd <FOLDER NAME>
```

## Set up buildx
Set up a buildx builder, if you do not already have one, that supports multiple platforms
```bash
sudo docker buildx create --use
```

## Build the Image
We need to build the image for `linux/arm64` using the correct dockerfile (aarch64) for both the Farmer and the Node. Using the `--load` flag should store the image locally for use. You should update the `<TAG>` to be the current release, such as `gemini-3h-2024-oct-03`

### Farmer
```bash
sudo docker buildx build --platform linux/arm64 --progress plain --load -t autonomys-comet-farmer:<TAG> -f Dockerfile-farmer.aarch64 .
```

### Node
```bash
sudo docker buildx build --platform linux/arm64 --progress plain --load -t autonomys-comet-node:<TAG> -f Dockerfile-node.aarch64 .
```

This process may take some time depending on the resources your PC has available. You can swap out the Dockerfile and change the platform depending on what system you are building the image for. 