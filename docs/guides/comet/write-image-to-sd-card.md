---
title: Write an OS Image to micro SD Card
---

## Introduction
To install an OS on an SBC like the CM3588 you need to write the image to the micro SD card. Before doing this, ensure you have properly reset the micro SD Card.

## Write Image to Micro SD Card
Download the [USBImager](https://gitlab.com/bztsrc/usbimager) tool, which we will use to write the image to the micro SD card. Once downloaded, extract the file and open up the tool. You should see something like

![usb-imager-1](/img/write-image-to-sd-card/usb-imager-1.png)

In the first input, select the image you downloaded in the previous step. Then select the micro SD card you reset earlier and click "Write"

![usb-imager-2](/img/write-image-to-sd-card/usb-imager-2.png)

It may take a few minutes to write the image to the disk as micro SD cards are not exactly speedy. You should see `Image written successfully` once it is done

![usb-imager-3](/img/write-image-to-sd-card/usb-imager-3.png)

The card is now ready to boot