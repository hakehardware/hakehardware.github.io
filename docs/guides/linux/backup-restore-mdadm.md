---
title: Back Up and Assemble an MDADM RAID5 Array
---

I recently created an 8 disk RAID5 array using mdadm (multiple device administration) in Ubuntu. I had to reinstall my operating system and wanted to make sure I could restore everything afterwards without much fuss. Turns out as long as you back up your config file it is pretty easy!

Now keep in mind doing anything with data is stressful. You will likely always want to have a recent copy of your data backed up somewhere else (3-2-1 rule), especially before doing something like this. Planning for the worst, hoping for the best has saved a lot of potentially ruined days.

Speaking of back ups, the first step you need to take is to back up the config file for mdadm. You can do this by running the following command

```bash
sudo mdadm --detail --scan
```

I got the following output:
```bash
ARRAY /dev/md0 metadata=1.2 spares=1 UUID=576d6fe7:c8528a0a:2c0fd278:09a74e22
```

Save the output of the scan to a file so that you can reference it later. That’s it for the back up. Technically, assuming all things go well, you will not need this when you assemble your drives after the reinstall.

To restore your RAID array, make sure mdadm is installed

```bash
sudo apt install mdadm
```

Then open up the config file and add in the scan data from the backup, then run 
```bash
sudo mdadm --assemble --scan
```

When I ran this there was no output. You can confirm everything worked by running:
```bash
sudo mdadm --detail /dev/md0
```

You should see details of your array printed out, for my RAID5 I got
```
           Version : 1.2
     Creation Time : Sun Sep 22 23:45:45 2024
        Raid Level : raid5
        Array Size : 123047371776 (114.60 TiB 126.00 TB)
     Used Dev Size : 17578195968 (16.37 TiB 18.00 TB)
      Raid Devices : 8
     Total Devices : 8
       Persistence : Superblock is persistent

     Intent Bitmap : Internal

       Update Time : Sun Sep 29 21:47:41 2024
             State : clean 
    Active Devices : 8
   Working Devices : 8
    Failed Devices : 0
     Spare Devices : 0

            Layout : left-symmetric
        Chunk Size : 512K

Consistency Policy : bitmap

              Name : milton:0  (local to host milton)
              UUID : 576d6fe7:c8528a0a:2c0fd278:09a74e22
            Events : 80586

    Number   Major   Minor   RaidDevice State
       0       8        0        0      active sync   /dev/sda
       1       8       16        1      active sync   /dev/sdb
       2       8      112        2      active sync   /dev/sdh
       3       8       32        3      active sync   /dev/sdc
       4       8       80        4      active sync   /dev/sdf
       5       8       48        5      active sync   /dev/sdd
       6       8       96        6      active sync   /dev/sdg
       8       8       64        7      active sync   /dev/sde
```

Here is where I ran into problems, I have no spare listed which is not good. So I need to add one, which oddly enough means I have to mark a drive as failed, remove it, then re-add it specifically as a spare.

So here we go, mark one as failed, I chose randomly

```bash
sudo mdadm --fail /dev/md0 /dev/sdh
```

Remove it
```bash
sudo mdadm --remove /dev/md0 /dev/sdh
```

Add it back but as a spare
```bash
sudo mdadm --add-spare /dev/md0 /dev/sdh
```
Now you will need to save the state of the array by updating initramfs
```bash
sudo update-initramfs -u
```

Lastly you will want to probably update fstab to automatically mount the drive. I will mount my raid array to /media/shared, so first I’ll create the folder
```bash
sudo mkdir /media/shared
```

Check the UUID, changing /dev/md0 as needed, with
```bash
sudo blkid /dev/md0
```

Which gives me
```bash
/dev/md0: UUID="b8273bf2-9661-4006-a8d7-19710ead427d" BLOCK_SIZE="4096" TYPE="ext4"
```

So I will use that UUID and filesystem when creating my fstab. Open up the fstab file
```bash
sudo nano /etc/fstab
```

Then add the following, using the UUID and mount point
```bash
UUID=b8273bf2-9661-4006-a8d7-19710ead427d       /media/shared   ext4 defaults,nofail    0       0
```

Press `CTRL + x`, then `y`, then `ENTER` to save. Then mount it (you can do this even while the array is rebuilding if you just added a spare).
```bash
sudo mount -av
```

Verify everything with
```bash
df -h
```

And that is it! You should have successfully restored your RAID array with mdadm. 