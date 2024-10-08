---
title: Install OS on eMMC using SD Card
---

## Introduction
This guide will cover how to install Debian Bookworm, Armbian, and Open Media Vault on your COMET using an SD Card. For this guide you will need:
1. Micro SD Card (at least 8GB) 
1. At least 64GB eMMC storage for the OS.
1. As USB Micro SD Card Adapter or Micro SD Card Reader
1. Windows OS

There is an [Official Guide](https://wiki.friendlyelec.com/wiki/index.php/CM3588#Option_1:_Install_OS_via_TF_Card) from FriendlyElec, however I found it a bit difficult to follow and it had a few steps missing.

Before proceed please make sure you have done the following:
* [Prepare Your Micro SD Card](https://hakehardware.github.io/docs/guides/comet/prepare-micro-sd-card)

## Debian
I highly recommend the Debian Core for Autonomys. Although Ubuntu Desktop works, it will use more resources. 

### Download the ISO
We will be using the official images created by FriendlyElec. All of their SD-to-eMMC images can be found on their [Google Drive](https://drive.google.com/drive/folders/1k5M_5s10M_HOoFb-_uZ80_7d6quG7hli). 

Find the appropriate image
* Debian Image: `rk3588-eflasher-debian-bookworm-core-6.1-arm64-20240818.img.gz`

### Write Image to Micro SD Card
Next, the image needs to be written to the micro SD card. The steps are described here:
* [Write Image to Micro SD Card](https://hakehardware.github.io/docs/guides/comet/write-image-to-sd-card)

### Boot the Micro SD Card
Insert the micro SD card into the COMET and turn it on. It should automatically boot from the micro SD card and install the operating system. It is recommended to have a monitor hooked up for this step so you can see the install progress. 

NOTE: The HDMI port closest to the USB port is an INPUT. You must use the other 2 ports to get a video OUTPUT signal. 

Once completed, you can power off the system and remove the micro SD card.

### Recommended Post-Install Steps
Power the COMET back on and it should boot into Debian. By default there are two accounts:
* root - username `root` and password `fa`
* pi - username `pi` and password `pi`

#### Change Root Password
Log in as root so that you can change the root password and set up a user account. To change the password run
```bash
passwd
```

#### Remove the `pi` user
```bash
userdel pi
```

#### Add a new user
```bash
useradd -m <USERNAME>
```

Set the password for your user
```bash
passwd <USERNAME>
```

And add your user to the sudo group
```bash
usermod -aG sudo <USERNAME>
```

#### Disable root Login over SSH
I typically disable root login over SSH, as I only ever use my user account. Open up sshd_config
```bash
nano /etc/ssh/sshd_config
```

Then find the entry for `PermitRootLogin` and set it to `no`

![root-login-no](/img/install-os-on-comet/root-login-no.png)

#### Update Sources
By default some mirrors are used that I am not familiar with. I usually set them back to the default 

Back up the sources list
```bash
mv /etc/apt/sources.list /etc/apt/sources.list.old
```

Then create and open up a new one with nano
```bash
nano /etc/apt/sources.list
```

Paste in the following
```
deb http://deb.debian.org/debian bookworm main non-free-firmware
deb-src http://deb.debian.org/debian bookworm main non-free-firmware

deb http://deb.debian.org/debian-security/ bookworm-security main non-free-firmware
deb-src http://deb.debian.org/debian-security/ bookworm-security main non-free-firmware

deb http://deb.debian.org/debian bookworm-updates main non-free-firmware
deb-src http://deb.debian.org/debian bookworm-updates main non-free-firmware

deb http://deb.debian.org/debian bookworm-backports main non-free-firmware
deb-src http://deb.debian.org/debian bookworm-backports main non-free-firmware
```

#### Update Your System
Now that we have the correct repositories, update your system
```bash
apt update && apt upgrade -y
```

Once that is complete, restart your system with
```bash
reboot now
```

And then login as your new user.

#### Set Hostname
By default you get the hostname of CM3588. This might be fine, but you can set your own. You can do this with
```bash
sudo hostnamectl set-hostname <NEW_HOSTNAME>
```

And then open up the hosts file and swap out any instance of `CM3588` with your new hostname
```bash
sudo nano /etc/hosts
```

## Armbian
:::warning
The CM3588 has "community support" for Armbian. Meaning it may not work and should be used only if the associated risks have been accepted.
:::

Please make sure you have prepared your micro SD card before proceeding
* [Prepare Your Micro SD Card](https://hakehardware.github.io/docs/guides/comet/prepare-micro-sd-card)

Download the Armbian OS for the CM3588 NAS Kit
* [Armbian Download](https://www.armbian.com/nanopc-cm3588-nas/)

At the time of this guide, there are three options available: Desktop, Minimal/IOT, and Dedicated Applications (OpenMediaVault). If you want a GUI then go for the Desktop. I will be using this headless, so the minimal/IOT image is what I downloaded and what this guide follows.

### Write Image to Micro SD Card
Next, the image needs to be written to the micro SD card. The steps are described here:
* [Write Image to Micro SD Card](https://hakehardware.github.io/docs/guides/comet/write-image-to-sd-card)

### Boot from Micro SD Card
Once the image has been written, insert it into the COMET and turn it on. It will automatically boot from the micro SD card. At this point I usually SSH into the COMET as it is easier to manage it from my main PC. But you could hook up a keyboard and monitor as well. Either way, after first login you will go through a setup process to reset the root password and create a new user. Once completed, update the system with
```bash
apt update && apt upgrade -y
```

Once this is finished you can install Armbian on to the eMMC, which will erase everything on it, and write the OS to it so you can boot directly to Armbian via the eMMC. To do this via the CLI, run the following command
```bash
armbian-install
```

A screen will pop up, select the option
```bash
2. Boot from eMMC - system on eMMC
```

The system will be installed and you will be given the option to Power Off the system, choose that option and remove the SD. Now power the system back on and it should boot from the eMMC and you can log in using the username and password you created during the setup. At this point you should be good to go!

If you can, make sure you [support the Armbian project](https://www.armbian.com/newsflash/armbian-needs-your-help/).


## Open Media Vault

TODO