---
title: Prepare Micro SD Card
---

## Introduction
Before writing an image to a micro SD Card, it is a good idea to prepare the card by cleaning and resetting it. This is done using a tool from the SD Association. This guide is written for Windows. 

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

![list-disk](/img/reset-sd-card/list-disk.png)

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

![sd-card-formatter](/img/reset-sd-card/sd-card-formatter.png)

On the next page, scroll to the bottom and accept the terms. This will start the download. Once downloaded, extract the file and install the SD Card Formatter. Once installed, open it up

![sd-card-formatter-open](/img/reset-sd-card/sd-card-formatter-open.png)

Select the appropriate card, and click the "Format" button. It should not take too long, and you should get a pop up stating it was successful

![sd-card-formatter-success](/img/reset-sd-card/sd-card-formatter-success.png)

The micro SD Card is now prepared.