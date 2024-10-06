---
id: install-docker-debian
title: Install Docker on Debian
---

## Introduction
One of the first things I always install is Docker. It is literally my favorite piece of software. There is an official guide for Debian, which an be found on the [Official Docker Docs](https://docs.docker.com/engine/install/debian/). But this is my way of doing it.

## Installation

Update your repositories to make sure we have the latest packages
```bash
sudo apt update
```

Then install dependencies
```bash
sudo apt install ca-certificates curl
```

Create keyring directory
```bash
sudo install -m 0755 -d /etc/apt/keyrings
```

Download Docker's GPG key into the folder we just created
```bash
sudo curl -fsSL https://download.docker.com/linux/debian/gpg -o /etc/apt/keyrings/docker.asc
```

Set the appropriate permissions for docker.asc
```bash
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

Add Docker's official repository to the system's package sources list
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/debian \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Update the repositories to get the latest packages from the repository we just added
```bash
sudo apt update
```

Install Docker packages
```bash
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```
## (OPTIONAL) Post Install
If you do not want to preface your Docker commands with `sudo` you can run this command to add the current user to the "docker" group. There are some security implications here so be sure this is something you really want to do.
```bash
sudo usermod -aG docker $USER
```