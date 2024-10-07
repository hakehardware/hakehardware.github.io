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

## Prepare the Micro SD Card
Regardless of what OS you install, the micro SD card will need to be prepped.

### Clean the Micro SD Card
Install the micro SD card into your Windows PC and open up Diskpart. You can do this by pressing `WIN + x`, and then selecting `Terminal (Admin)`. Then type
```bash
diskpart
```

Find the disk number for your micro SD card with
```bash
list disk
```

On my system it was obvious as I have a 16GB card (shows as 14GB)

![list-disk](/static/img/install-os-on-comet/list-disk.png)

Select the disk
```bash
select disk <YOUR DISK NUMBER>
```

:::warning

The next step will erase the data on the selected disk. Make absolutely sure it is the right disk. The data will be lost.

:::

Clean the disk with
```bash
clean
```

Now create a primary partition
```bash
create partition primary
```

### Reset the SD Card
Download the [SD Memory Card Formatter](https://www.sdcard.org/downloads/formatter/) from the SD Association site. You will need to scroll down a bit and select Windows

![sd-card-formatter](/static/img/install-os-on-comet/sd-card-formatter.png)

On the next page, scroll to the bottom and accept the terms. This will start the download. Once downloaded, extract the file and install the SD Card Formatter. Once installed, open it up

![sd-card-formatter-open](/static/img/install-os-on-comet/sd-card-formatter-open.png)

Select the appropriate card, and click the "Format" button. It should not take too long, and you should get a pop up stating it was successful

![sd-card-formatter-success](/static/img/install-os-on-comet/sd-card-formatter-success.png)

The micro SD Card is now prepared.

## Debian
I highly recommend the Debian Core for Autonomys. Although Ubuntu Desktop works, it will use more resources. 

### Download the ISO
We will be using the official images created by FriendlyElec. All of their SD-to-eMMC images can be found on their [Google Drive](https://drive.google.com/drive/folders/1k5M_5s10M_HOoFb-_uZ80_7d6quG7hli). 

Find the appropriate image
* Debian Image: `rk3588-eflasher-debian-bookworm-core-6.1-arm64-20240818.img.gz`

### Write Image to Micro SD Card
Download the [USBImager](https://gitlab.com/bztsrc/usbimager) tool, which we will use to write the image to the micro SD card. Once downloaded, extract the file and open up the tool. You should see something like

![usb-imager-1](/static/img/install-os-on-comet/usb-imager-1.png)

In the first input, select the image you downloaded in the previous step. Then select the micro SD card you reset earlier and click "Write"

![usb-imager-2](/static/img/install-os-on-comet/usb-imager-2.png)

It may take a few minutes to write the image to the disk as micro SD cards are not exactly speedy. You should see `Image written successfully` once it is done

![usb-imager-3](/static/img/install-os-on-comet/usb-imager-3.png)

The card is now ready to boot

### Boot the Micro SD Card
Insert the micro SD card into the COMET and turn it on. It should automatically boot from the micro SD card and install the operating system. Once completed, you can power off the system and remove the micro SD card.

### Recommended Post-Install Steps
Power the COMET back on and it should boot into Debian. By default there are two accounts:
* root - username `root` and password `fa`
* pi - username `pi` and password `pi`

#### Change Root Password
Log in as root so that you can change the root password and set up a user account. Then run
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

![root-login-no](/static/img/install-os-on-comet/root-login-no.png)

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

TODO


## Open Media Vault

TODO