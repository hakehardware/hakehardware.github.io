---
title: Install Portainer Host/Agent
---

## Introduction
If you run Docker, adding a GUI like Portainer to it can really enhance the experience. I prefer Portainer, but there are a few other options out there. Although having a GUI for Docker is really cool - what I love about Portainer is that if you have lots of COMETs (or other PCs) running Docker, you can run a single Portainer "Host" and the rest can just run Portainer "Agents". These agents connect to your main Portainer instance and you can view everything in a single location. It is really convenient!

We will cover both installing the Portainer Host and the Agents in this guide.

![architecture](/img/portainer-agent-host/architecture.png)

## Installing Portainer Host
For reference, this is the guide I use from the [Official Portainer Docs](https://docs.portainer.io/start/install-ce/server/docker/linux) Because Portainer runs as a container inside Docker, the installation is SUPER easy. The first step is to create the volume that Portainer will use
```bash
sudo docker volume create portainer_data
```

Now run the Docker command to download and deploy the Portainer image
```bash
sudo docker run -d -p 8000:8000 -p 9443:9443 --name portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce:2.21.2
```

Make sure that you update the "portainer/portainer-ce:2.21.2" is the latest version by checking the Official Docs listed above. To confirm the deployment was successful, you can run
```bash
sudo docker ps
```

Which should list the Docker container for Portainer like this

![architecture](/img/portainer-agent-host/docker-ps.png)

You can now access Portainer by opening up a browser and either running `https://localhost:9443` if Portainer is running on your current PC, or use the IP address of the PC that is running Portainer, for instance; `https://192.168.69.10:9443`. Firefox will give you the warning below, and Chrome will likely have something similar:

![architecture](/img/portainer-agent-host/security.png)

This is okay, it's because it is using a self-signed certificate since you are hosting the website locally. Click "Advanced" and then "Accept the Risk and Continue". Now you need to create a login for Portainer, I usually leave the Username as "Admin" and then create whatever password you wish. Then hit "Create user".

![architecture](/img/portainer-agent-host/register.png)

Once you log in, click the big "Get Started" button to view your Environments

![architecture](/img/portainer-agent-host/get-started.png)

Here is where you can view your PC running Portainer. I do not know if this is like container-ception or something, but you can view the container that is running the container that lets you view the container. The magic of Docker.

This is not really a guide on how to use Portainer, but a few quick notes: If you click the card for the "local" environment that is the PC running Portainer. We will see how to add external environments for other PCs running on your network soon. But inside this environment there is a menu on the left side that has all sorts of options - for the most part this can also be seen in the main content area


1. **Stacks** - These are like Docker Compose files, basically infrastructure as code. Allowing you to deploy many Docker containers at once.
1. **Container** - This will list out all the containers you have running
1. **Image** - This will show you all the images you have downloaded
1. **Volume** - This will show you all the volumes you have created
1. **Networks** - If you see the pattern here, this will show you the Networks. By default you will already have some.

## Installing a Portainer Agent

So now that you have a Host running, you can connect many Agents. To do this, click the "Environment-related" menu under "Administration". Then click "Add environment" (top right).
Select "Docker Standalone"

![architecture](/img/portainer-agent-host/standalone.png)

Then click the "Start Wizard" button. Leave "Agent" selected, and then copy the command listed for "Linux & Windows WSL". Open up the terminal on the PC you want to add as an Agent, and paste it in. Do not forget "sudo" if you did not enable running Docker without sudo.

Once the container deploys, go back to Portainer and fill out the "Name" input. This can be basically whatever you want. I usually come up with fun names or themes for my PCs so I can remember what they are. In the second input you will need to put the IP address of the PC you are adding and the port 9001. You can find your local network IP by running
```bash
hostname -I
```

Usually it's something like 192.168.X.X (where the X will be dependent on your network). In the below example, mine is 192.168.69.10

![architecture](/img/portainer-agent-host/hostname.png)

So in Portainer to add my Environment I will put

![architecture](/img/portainer-agent-host/agent.png)

And then click "Connect". You should see an alert notifying you that the environment was connected. If you missed it, simply click on the "Home" button to go back to the main screen and see if your new Environment is there.

You can now manage both environments from a single website, super efficient! You can add as many environments as you want. I've run 10+ before and it really is a time saver. Here is what it looks like with four (bob is shut off which is why it shows as `down`)

![architecture](/img/portainer-agent-host/environments.png)