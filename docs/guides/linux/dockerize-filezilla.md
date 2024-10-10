---
title: Dockerize Filezilla
---

I never really thought of running an FTP client in Docker but I have a use case now: My raid 5 array is hosted on my server which is just a headless Ubuntu Server instance. Sure, I could use ftp in the CLI but when I have Docker and can just spin up a FileZilla instance and access it via the browser it just does not seem enticing. I actually have a lot going on with my raid array, but basically how I have it set up is that at the group level the group “smbusers” has access, and then at the user level it’s owned by root.

Permissions are probably the hardest to figure out when it comes to something like this because FZ will need be able to write to the array. We will cover how to ensure your permissions are set up correctly. Enough rambling, let’s install!

I found two popular options for the docker image:

1. https://hub.docker.com/r/linuxserver/filezilla
1. https://github.com/jlesage/docker-filezilla

Both of these seem to be good options but ultimately I swent with the one created by jlesage (thanks!). The github provides decent instructions so feel free to check those out for the latest.

My final docker-compose looks like

```yaml
services:
  filezilla:
    image: jlesage/filezilla
    container_name: filezilla
    ports:
      - "5800:5800"  # Web interface
    volumes:
      - "<DOWNLOAD LOCATION>:/storage:rw"  # Mounting RAID array
      - "config:/config:rw"  # Configuration
    environment:
      - USER_ID=1000
      - GROUP_ID=1001
      - TZ=<TIMEZONE>
      - UMASK=0002
      - DARK_MODE=1
    restart: unless-stopped

volumes:
  config:
```

Here are some considerations:

1. I chose to mount my raid array to ‘/storage’ so that I could download directly to it since that is where I store all my files anyway. You can pass in a HDD or folder depending on your use case
1. I chose to use a named volume for my config, so Docker just creates the volume and the container uses it. Easy.
1. I set USER_ID to 1000 which is my user account’s ID, then I set my GROUP_ID to 1001 which is the ID for my ‘smbusers’ group which has rw access to the array.
1. I set UMASK to 0002 which allows newly created files to allow rw for the group by default. So anyone in the ‘smbusers’ group can rw the files and folders created by FZ
1. And of course DARK_MODE=1 because dark mode is superior

You can find out your IDs by running this command
```bash
id <username>
```

I get the following output
![id-hakehardware](/img/dockerize-filezilla/id-hakehardware.jpg)

The key parts are UID=1000 and GID for ‘smbusers’ is 1001. Also, prior to this I had already added my user “hakehardware” to the “smbusers” group which is why it shows up when I run the '“id” command. If a group you expect to be in doesn’t show up you will need to add your user to that group first.
