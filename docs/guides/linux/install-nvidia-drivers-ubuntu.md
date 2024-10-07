---
title: Install Nvidia Drivers Ubuntu
---

## Introduction
Ubuntu makes it pretty easy to install the latest Nvidia drivers. This is my preferred way, but as I have noticed there are about 1 billion ways to do this so pick your poisen.

## Add Nvidia PPA
As always update your system first
```bash
sudo apt update && sudo apt upgrade -y
```

Then add the Nvidia PPA
```bash
sudo add-apt-repository ppa:graphics-drivers/ppa
```

When prompted hit `ENTER` to continue

And pull the latest packages
```bash
sudo apt update
```

And then check which ones are available
```bash
ubuntu-drivers devices
```

## Install Drivers
Once you identify the driver you wish to install, simply install it with apt. I want to nvidia-driver-560
```bash
sudo apt install nvidia-driver-560
```

Then you will want to do a reboot for the changes to take effect
```bash
sudo reboot now
```

## Confirm Installation
The best way to check and be sure everything installed correctly is to run
```bash
nvidia-smi
```

Which should give you a print out similar to this

![nvidia-smi](/img/install-nvidia-drivers-ubuntu/nvidia-smi.png)
