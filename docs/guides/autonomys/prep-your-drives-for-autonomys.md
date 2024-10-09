---
title: Prepare Farmer SSDs
---

:::warning

This guide was created for Gemeni 3h testnet and will be updated to mainnet once released.

:::

## Introduction
This guide will help you prepare your drives for farming on the Autonomys network. Specifically, this guide is meant for users who are planning to use dedicated drives. 


:::warning

Use extra caution when preparing your drives. These actions will wipe the data on your drives and could result in data loss if you wipe the incorrect drive!

:::

## Debian/Ubuntu - Manual Method
To prepare your drives in Debain/Ubuntu, we need to perform the following actions:
1. Identify the drives we want to prepare
1. Wipe the drives
1. Format the drives
1. Create a mount point
1. Create an FSTAB entry
1. Mount the drive
1. Verify drives
1. Set Permissions

We will go through each step one at a time.

### Identify the Drives to Prepare
We need to be absolutely certain that we are preparing the correct drives. I use the following command to print out my block devices
```bash
lsblk
```

In my case, I get the following output

![lsblk](/img/prep-your-drives-autonomys/lsblk.png)

I am using an ARM device, so my drives look a bit different (mmcblk2 is an eMMC storage drive). However, I know that I have four M.2 NVME drives, and those are the drives I want to prepare. If your OS is installed onto an NVME drive, it will look similar to this

![lsblk](/img/prep-your-drives-autonomys/nvme-os.png)

As you can see the `nvme0n1` drive has 3 partitions (p1, p2, p3). The partition `nvme0n1p2` is mounted to `/boot` which is a clear indicator it is a boot drive. I would make sure to skip this drive. Make note of the drives you wish to prepare, as the next step we will wipe them, deleting all partitions and data. You may see `sda` instead of `nvme0n1` if you have SATA SSDs instead of NVME drives.

### Wipe the Drives
Now that you know what drives you want to prepare, we can wipe them with a single command

```bash
wipefs --all /dev/<DEVICE LOCATION>
```

Replace `<DEVICE LOCATION>` with your device. For instance, `nvme0n1` (NVME) or `sda` (SATA SSD) for me, but make sure to use what is applicable for your setup. Do this for each drive you want to prepare.

### Format the Drives
Next, we will format the drive in the most optimal way for Autonomys. Again, this can be done with a single command for each drive
```bash
mkfs.ext4 -m 0 -T largefile4 -F /dev/<DEVICE LOCATION>
```

* `mkfs.ext4` the recommended file system for Linux is ext4
* `-m 0` sets the reserved space to 0. Reserve space is not needed for SSDs used only for Autonomys
* `-T largefile4` optimizes the inode and blocksize for large files like Autonomys uses. This gives you more space to work with.
* `-F` bypasses the "Are you sure?" prompt, you can leave this off if you want to be prompted

### Create a Mount Point
The drive is prepped, but we need to create a mount point for the drives. I like to mount all my drives on `/media/autonomys`. You can choose a different location, but make note of it, as you will need to specify the mount location when running the Farmer. This guide will use my method but can be adapted as needed.

Create the parent directory for our mount points
```bash
sudo mkdir /media/autonomys
```

Then create a folder for each drive. I like to use the pattern of `farm-<LAST 5 of UUID>`. You can get the UUID of each drive by running
```bash
lsblk -f
```

Which gives you an output like this

![lsblk](/img/prep-your-drives-autonomys/lsblk-f.png)

The UUIDs are the long strings that look like this `89e4c011-302a-41ef-9f55-b9d2cd0ff54d`. I take the last five characters and use it to create a unique folder to mount the drive. This is personal preferance. You can name your folder something like `farm-1`, `farm-2`, etc.. if you wish. Using this example, the mount point for the drive with the UUID in this example would be `/media/autonomys/farm-ff54d`. 

For each drive, create a unique sub-folder to mount it. Using my example above
```bash
sudo mkdir /media/autonomys/farm-ff54d
```

I will do this for all four of my drives until I have something like this

![mount-points](/img/prep-your-drives-autonomys/mount-points.png)

### Create an FSTAB entry
In order for the drives to be mounted automatically when you reboot, you will need to add an entry into your FSTAB for each drive. Grab the UUIDs for all of your drives, we will need these to specify the drive in the FSTAB file. Open up the FSTAB file
```bash
sudo nano /etc/fstab
```

Move to the bottom and create a new section called `# Autonomys` and add entry for each drive following this format:
```
# Autonomys
UUID=<YOUR UUID> /media/autonomys/<YOUR MOUTN POINT> ext4 defaults,noatime,nofail  0 0
```

Here is mine completed

![fstab](/img/prep-your-drives-autonomys/fstab.png)

### Mount the Drive
Now that we have the mount points, and the FSTAB file created, we can mount all the drives with a single command (this only has to be done once, after this the system will use the FSTAB to automatically mount them)

```bash
sudo mount -av
```

Then update systemd to load the latest FSTAB changes

```bash
sudo systemctl daemon-reload
```

### Verify
Everything should be mounted, we can confirm this by checking
```bash
df -h
```

You should see each of your drives mounted to the folders you specified in the FSTAB

![df-h](/img/prep-your-drives-autonomys/df-h.png)

### Set Permissions
Lastly, we need to set the permissions so that Autonomys can access the drives for farming. To do this we will set the ownership to `nobody:nogroup` for all sub-folders of our main autonomys directory
```bash
sudo chown -R nobody:nogroup /media/autonomys/*
```

Now that the drives are prepared, they are ready to be added to the Farmer. You will need to make note of the mount points for each drive, as you will need to specify it in the Autonomys Farmer command. 

## Debian/Ubuntu - Script
The script performs essentially the same actions as the Manual method. There will be a few prompts which you must respond to, but it is otherwise automated. The script will check for a boot partition in order to prevent wiping the OS drive, but always be sure to skip the drives you do not want to wipe. The script will automatically unmount mounted drives if necessary. 

Currently the script is only setup to detect NVME drives, I will eventually adapt it for SATA drives too. 

### Identify the Drives to Prepare
We need to be absolutely certain that we are preparing the correct drives. I use the following command to print out my block devices
```bash
lsblk
```

In my case, I get the following output

![lsblk](/img/prep-your-drives-autonomys/lsblk.png)

I am using an ARM device, so my drives look a bit different (mmcblk2 is an eMMC storage drive). However, I know that I have four M.2 NVME drives, and those are the drives I want to prepare. If your OS is installed onto an NVME drive, it will look similar to this

![lsblk](/img/prep-your-drives-autonomys/nvme-os.png)

As you can see the `nvme0n1` drive has 3 partitions (p1, p2, p3). The partition `nvme0n1p2` is mounted to `/boot` which is a clear indicator it is a boot drive. I would make sure to skip this drive. Make note of the drives you wish to prepare, as the next step we will wipe them, deleting all partitions and data. You may see `sda` instead of `nvme0n1` if you have SATA SSDs instead of NVME drives.

The script will prompt you before wiping each drive, so make sure you confirm at each prompt if you really want to wipe the drive.

### Clone the github repo
clone the scripts repo
```bash
git clone https://github.com/hakehardware/scripts.git
```

Then change to the scripts directory
```bash
cd scripts
```


### Make Script Executable
Now make the nvme_prep.sh script executable
```bash
chmod +x nvme_prep.sh
```


### Run the Script
And then run the script as root (required)
```bash
sudo ./nvme_prep.sh
```
The script will automatically wipe the drives, create mount points, and mount the drives with the correct permissions.

### Verify
When the script finishes, you can verify everything was completed successfully. We can confirm this by checking
```bash
df -h
```

You should see each of your drives mounted to the folders based on the UUID of the drives in the FSTAB

![df-h](/img/prep-your-drives-autonomys/df-h.png)

## Windows
To prepare your drives on Windows, we need to perform the following actions:
1. Identify the drives we want to prepare
1. Wipe the drives
1. Partition, Format and Label the drive

We will go through each step one at a time. This guide will use `diskpart` to prepare the drives. To get started, press `WIN + x`. Then select "Terminal (Admin)". Then type in
```bash
diskpart
```

When ready it should look something like this

![diskpart](/img/prep-your-drives-autonomys/diskpart.png)

### Identify the Drives to Prepare
Start by listing the disks with 
```bash
list disk
```

Typically the best way to infer which disks are which is by size. Here I know my OS is on a 2TB drive so the one with 18XX GB is my OS drive. 

![list-disk](/img/prep-your-drives-autonomys/list-disk.png)

If you still are not sure what drive is what, you can try to list the volumes.

![list-volume](/img/prep-your-drives-autonomys/list-volume.png)

I know volumes 0-2 are my OS drive, and I know volume 3 is a spare disk I use for storing my Code. Using these two commands I can identify the two disks I do not want to wipe (Disk 0 and Disk 3). Note that the volume numbers do not correspond to the drive numbers. I know Disk 3 is the "Code" volume because the size is 447GB which I can see is the size of Disk 3. 

You can also use Disk Management, which can be found by pressing `WIN + x` again and selecting "Disk Management". Here it is a bit more clear (the Disk numbers should corresond to what we saw in diskpart)

![disk-management](/img/prep-your-drives-autonomys/disk-management.png)

So again, we can see Disk 0 and Disk 3 I do not want to wipe. It is important to take the time to identify the correct disk, as you will lose data in the next step if you select the wrong one.

### Wipe the Drives
You will want to fully complete the following process before moving to another disk. Select the first drive in diskpart with
```bash
select disk <DISK NUMBER>
```

Change the `<DISK NUMBER>` to the number identified in the previous step. Then clean the drive
```bash
clean
```

The drive should now be wiped and ready for formatting.

### Partition, Format, and Label the drive
Create the primary partition
```bash
create partition primary
```

Format the drive with NTFS and give it a Label
```bash
format fs=ntfs label=<YOUR LABEL> quick
```

Replace `<YOUR LABEL>` with a label of your choosing. It's best to choose something that makes the disk easily identifiable. 

Assign a drive letter
```bash
assign letter=X
```

Now repeat all the above steps again for each drive, setting a unique LABEL. Here is the full process for one of my disks

![full-clean](/img/prep-your-drives-autonomys/full-clean.png)

### Verify
You can verify the disk is ready by opening up "This PC" and looking at the mounted drives

![this-pc](/img/prep-your-drives-autonomys/this-pc.png)

Your drive is now ready to be attached to a Farmer!