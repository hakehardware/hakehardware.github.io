---
title: Pass Nvidia GPU Into Docker
---

## Introduction
I often need to pass an Nvidia GPU into Docker. Recently I've had to do this for hosting my own AI and a project called Autonomys. If you need to install Nvidia drivers, you can follow my guide 
* [Install Nvidia Drivers on Ubuntu](https://hakehardware.github.io/docs/guides/linux/install-nvidia-drivers-ubuntu)

## Install Nvidia Docker Toolkit
Add the repository
```bash
curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg \
  && curl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | \
    sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | \
    sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list
```

Update the repos to get the latest packages
```bash
sudo apt update
```

Install the Toolkit
```bash
sudo apt-get install -y nvidia-container-toolkit
```

## Add the Nvidia Runtime
The last step is to add the Nvidia runtime
```bash
sudo nvidia-ctk runtime configure --runtime=docker
```

Then restart docker (this will stop all your containers FYI)
```bash
sudo systemctl restart docker
```

## Adding the GPU to a Container
Here is an example of how you can add an Nvidia card into a Docker container

```yaml
services:
  some_container:
    image: some-image:v0.0.1    
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: all  # Adds all available GPUs
              capabilities: [gpu]
    runtime: nvidia

```
As is implied by `count: all` this adds all available GPUs. You may not wish to do this, in that case you can specify the `device_ids`

```yaml
services:
  some_container:
    image: some-image:v0.0.1    
    deploy:
      resources:
        reservations:
          devices:
            - driver: nvidia
              count: 2  # Use 2 GPU (optional when using device_ids)
              capabilities: [gpu]
              device_ids: ["0", "1"]  # Use specific GPUs (for example GPU 0 and GPU 1)
    runtime: nvidia
```