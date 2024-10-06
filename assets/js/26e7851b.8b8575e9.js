"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[643],{4826:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var s=n(4848),o=n(8453);const r={title:"Run an Autonomys Cluster Farmer on Docker"},a=void 0,i={id:"guides/autonomys/docker-cluster-autonomys",title:"Run an Autonomys Cluster Farmer on Docker",description:"This guide was created for Gemeni 3h testnet and will be updated to mainnet once released.",source:"@site/docs/guides/autonomys/docker-cluster-autonomys.md",sourceDirName:"guides/autonomys",slug:"/guides/autonomys/docker-cluster-autonomys",permalink:"/docs/guides/autonomys/docker-cluster-autonomys",draft:!1,unlisted:!1,editUrl:"https://github.com/hakehardware/hakehardware.github.io/edit/main/docs/guides/autonomys/docker-cluster-autonomys.md",tags:[],version:"current",frontMatter:{title:"Run an Autonomys Cluster Farmer on Docker"},sidebar:"guides",previous:{title:"Run an Autonomys Node on Docker",permalink:"/docs/guides/autonomys/docker-node-autonomys"},next:{title:"Prep Your Drives for Autonomys",permalink:"/docs/guides/autonomys/prep-your-drives-for-autonomys"}},l={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Create an Autonomys Network in Docker",id:"create-an-autonomys-network-in-docker",level:2},{value:"Cluster Farmer Architecture",id:"cluster-farmer-architecture",level:2},{value:"Preparing for a Cluster",id:"preparing-for-a-cluster",level:2},{value:"NATs",id:"nats",level:3},{value:"Controller",id:"controller",level:3},{value:"Cache",id:"cache",level:3},{value:"Set Appropriate Permissions (required for all components)",id:"set-appropriate-permissions-required-for-all-components",level:2},{value:"Cluster Stack Files",id:"cluster-stack-files",level:2},{value:"All-In-One",id:"all-in-one",level:3},{value:"Split-Setup",id:"split-setup",level:3},{value:"IP Addresses and Docker",id:"ip-addresses-and-docker",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.admonition,{type:"warning",children:(0,s.jsx)(t.p,{children:"This guide was created for Gemeni 3h testnet and will be updated to mainnet once released."})}),"\n",(0,s.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(t.p,{children:"Before setting up a Cluster Farmer, you should already:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Have a Node running. ",(0,s.jsx)(t.a,{href:"https://hakehardware.github.io/docs/guides/autonomys/docker-node-autonomys",children:"Run an Autonomys Node on Docker"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:["Have prepped your drives. ",(0,s.jsx)(t.a,{href:"https://hakehardware.github.io/docs/guides/autonomys/prep-your-drives-for-autonomys",children:"Prep Your Drives for Autonomys"})]}),"\n",(0,s.jsxs)(t.li,{children:["Have Docker installed ",(0,s.jsx)(t.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-docker-debian",children:"Install Docker on Debian"})]}),"\n",(0,s.jsxs)(t.li,{children:["Have Portainer Installed ",(0,s.jsx)(t.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-portainer-host-agent",children:"Install Portainer Host/Agent"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"create-an-autonomys-network-in-docker",children:"Create an Autonomys Network in Docker"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"You only need to create the network once for each PC. If you already created it on this PC you can skip this step."})}),"\n",(0,s.jsx)(t.p,{children:'Create the "autonomys-network" we will use to deploy our Autonomys containers on:'}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo docker network create \\\r\n  --driver bridge \\\r\n  --subnet 172.25.0.0/16 \\\r\n  --gateway 172.25.0.1 \\\r\n  autonomys-network\n"})}),"\n",(0,s.jsx)(t.p,{children:'This creates a new network called "autonomys-network" using the subnet 172.25.0.0/16 and the gateway 172.25.0.1.'}),"\n",(0,s.jsx)(t.h2,{id:"cluster-farmer-architecture",children:"Cluster Farmer Architecture"}),"\n",(0,s.jsx)(t.p,{children:"Because of how modular a Cluster is, depending on your setup you may want to deploy only certain parts of the Cluster on certain PCs. Let us start with a minimal Cluster:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Minimal Cluster",src:n(5078).A+"",width:"963",height:"549"})}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Node"})," (which stores blockchain data on an SSD) connects to the ",(0,s.jsx)(t.strong,{children:"Controller"}),". This is NOT part of the cluster, but shown to highlight the relationship"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Controller"})," is connected to the ",(0,s.jsx)(t.strong,{children:"Node"})," and ",(0,s.jsx)(t.strong,{children:"NATs"}),", this acts as sort of the brains of the Cluster"]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Cache"})," is connected to ",(0,s.jsx)(t.strong,{children:"NATs"})," and stores blockchain data for plotting on an SSD."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Plotter"})," is connected to ",(0,s.jsx)(t.strong,{children:"NATs"})," and uses GPU or CPU resources to plot to any Farmers connected to the network."]}),"\n",(0,s.jsxs)(t.li,{children:["The ",(0,s.jsx)(t.strong,{children:"Farmer"})," is connected to ",(0,s.jsx)(t.strong,{children:"NATs"})," and SSDs which will be used to store blockchain data for farming."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Because of how modular a Cluster is, you can add more Plotters if you want to plot faster, more Farmers if you want to farm more space, and more Cache and/or Controllers to increase efficiency. For instance, many users put a Cache on every PC with a Plotter to reduce network traffic."}),"\n",(0,s.jsxs)(t.p,{children:["For redundancy, you can run multiple Controllers and Cache pairs. Additional redundancy can be added for NATs by running a NATs cluster (different than an Autonomys cluster). These more complex topics will be covered in the ",(0,s.jsx)(t.a,{href:"https://hakehardware.github.io/docs/guides/autonomys/advanced-clusters",children:"Advanced Clusters Guide"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"Before we continue, let us take a look at a slightly more complex but very common Cluster set up."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Common Cluster",src:n(906).A+"",width:"1298",height:"625"})}),"\n",(0,s.jsx)(t.p,{children:"In this setup, we see two addtional Plotters and two additional Farmers. The benefit of Clusters is that you can add many Farmers and Plotters without a lot of additional overhead. Simply connect a new Farmer or Plotter to your Cluster and the Controller with detect it and begin Plotting and Farming."}),"\n",(0,s.jsx)(t.p,{children:"One thing to make clear is that each PC only needs to run a single instance of a Cluster component. There is no real benefit to running multiple Plotters or Farmers on the same PC. One caveat at the time of writing this guide, is that some people have reported getting more performance out of their GPU plotting by running multiple Plotters. But this will likely not be needed for long and generally should be avoided."}),"\n",(0,s.jsx)(t.h2,{id:"preparing-for-a-cluster",children:"Preparing for a Cluster"}),"\n",(0,s.jsx)(t.p,{children:"Certain components of a Cluster require preperation. We will cover what is necessary for each component below. I prefer to create these directories in my home directory, but you can place them wherever is most convienent. Just make sure your containers reflect the actual path."}),"\n",(0,s.jsx)(t.h3,{id:"nats",children:"NATs"}),"\n",(0,s.jsxs)(t.p,{children:["Any PC that will run NATs needs to have a config file specified in the container. I typically put this at the path ",(0,s.jsx)(t.code,{children:"~/autonomys/nats"}),". We can do this with a single command which does the following:"]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Create a folder in the home directory called "autonomys" and create a sub-directory called "nats" inside it.'}),"\n",(0,s.jsx)(t.li,{children:'Create a file called "nats.config"'}),"\n",(0,s.jsxs)(t.li,{children:["Add the text ",(0,s.jsx)(t.code,{children:"max_payload = 2MB"})," inside the config."]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:'mkdir -p ~/autonomys/nats && echo "max_payload = 2MB" > ~/autonomys/nats/nats.config\n'})}),"\n",(0,s.jsx)(t.h3,{id:"controller",children:"Controller"}),"\n",(0,s.jsxs)(t.p,{children:["Any PC that will run a Controller needs to have a folder that it can use to store files. I typically put this at the path ",(0,s.jsx)(t.code,{children:"~/autonomys/controller"})," and we can create this by running"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir -p ~/autonomys/controller\n"})}),"\n",(0,s.jsx)(t.h3,{id:"cache",children:"Cache"}),"\n",(0,s.jsxs)(t.p,{children:["Any PC that will run a Cache needs to have a folder that it can store the cache files. I typically put this at the path ",(0,s.jsx)(t.code,{children:"~/autonomys/cache"})," and we can create this by running"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"mkdir -p ~/autonomys/cache\n"})}),"\n",(0,s.jsx)(t.h2,{id:"set-appropriate-permissions-required-for-all-components",children:"Set Appropriate Permissions (required for all components)"}),"\n",(0,s.jsxs)(t.p,{children:["For everything to work correctly, we need to set the appropriate permissions. This applies to ALL the folders and files created above. In my examples, everything is inside the ",(0,s.jsx)(t.code,{children:"~/autonomys"})," folder, so I can simply run"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"sudo chown -R nobody:nogroup ~/autonomys/*\n"})}),"\n",(0,s.jsx)(t.p,{children:"If you changed the location of the folders or files, modify the command as needed. To check the permissions are set correctly you can run"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-bash",children:"ls -l /your/path\n"})}),"\n",(0,s.jsx)(t.p,{children:"Using my example, you should get something like this"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"permissions",src:n(3856).A+"",width:"472",height:"92"})}),"\n",(0,s.jsx)(t.h2,{id:"cluster-stack-files",children:"Cluster Stack Files"}),"\n",(0,s.jsx)(t.p,{children:"Each component of a Cluster gets deployed as a Docker container. In Portainer, we can add the code for all containers into a single YAML file and deploy everything at once. You will need to use the locations of the folders and files noted above, along with the location of the SSDs your Farmer will plot to in order to successfully deploy the containers."}),"\n",(0,s.jsx)(t.h3,{id:"all-in-one",children:"All-In-One"}),"\n",(0,s.jsx)(t.p,{children:"The first setup we will cover is running a Node + Cluster on one PC. There are multiple benefits to running a Cluster even if you will have everything on one PC. First, you can specify the size of your Cache to be the optimal size for the fastest possible plotting. Second, you will already have a Cluster set up if you ever want to expand. Third, it really is no more difficult than not running a Cluster."}),"\n",(0,s.jsx)(t.p,{children:"Here is the basic architecture for an all-in-one setup"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"All in One",src:n(6394).A+"",width:"1312",height:"606"})}),"\n",(0,s.jsxs)(t.p,{children:["On the left side are the resource we use. You will need an SSD (two shown, but can be 1 SSD with sufficient space) and either a GPU (recommended) or CPU for plotting. The Cluster Farmer can handle lots of SSDs, but requires at least one. On the right side you can see all of the Cluster components needed. In this scenario, the Node has its own stack file, NATs has its own stack file, and the Cluster has its own stack file. This separation is not necessarily required, but I prefer to compartmentalize these operations. On the ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files",children:"autonomys_files"})," repo, there is an example YAML for each. Note that you should run the cluster-cpu.yaml if you do not have a supported GPU and the cluster-gpu.yaml if you have a supported GPU."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/node.yaml",children:"node.yaml"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/nats.yaml",children:"nats.yaml"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-gpu.yaml",children:"cluster-gpu.yaml (For GPU Plotting)"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-cpu.yaml",children:"cluster-cpu.yaml (For CPU Plotting)"})}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"split-setup",children:"Split-Setup"}),"\n",(0,s.jsx)(t.p,{children:"The main benefit of a Cluster is that you can split it up and duplicate it. This is a more complex setup where you have multiple cluster components."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"All in One",src:n(5562).A+"",width:"1410",height:"1027"})}),"\n",(0,s.jsx)(t.p,{children:"In this example, we see that there is a dedicated Node which handles only Node related things. The Node is connected to the Cluster Controller which is running on a dedicated Cluster. On the dedicated Cluster, the Controller is connected to the Node and NATs. Each of the other Cluster components just attach to NATs. Then there is a dedicated Plotter which is connected to the NATs container on the dedicated Cluster. Last, there is a dedicated Farmer which connects to the NATs container on the dedicated Cluster."}),"\n",(0,s.jsxs)(t.p,{children:["In this example, all Cluster components are being managed by the dedicated Cluster. If that PC goes down, the whole cluster breaks. You could add redundancy here by having the dedicated Plotter and Farmer run NATs and a Controller as well. This topic is covered in ",(0,s.jsx)(t.a,{href:"https://hakehardware.github.io/docs/guides/autonomys/advanced-clusters",children:"Advanced Clusters Guide"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["As with the last set up, the files to create this type of setup are found in the ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files",children:"autonomys_files"})," repo."]}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Dedicated Node would use ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/node.yaml",children:"node.yaml"})]}),"\n",(0,s.jsxs)(t.li,{children:["Dedicated Cluster would use the ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/nats.yaml",children:"nats.yaml"})," and the ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-gpu.yaml",children:"cluster-gpu.yaml (For GPU Plotting)"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-cpu.yaml",children:"cluster-cpu.yaml (For CPU Plotting)"})]}),"\n",(0,s.jsxs)(t.li,{children:["Dedicated Plotter would use ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-gpu.yaml",children:"cluster-gpu.yaml (For GPU Plotting)"})," or ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-cpu.yaml",children:"cluster-cpu.yaml (For CPU Plotting)"})]}),"\n",(0,s.jsxs)(t.li,{children:["Dedicated Farmer would use ",(0,s.jsx)(t.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/farmer.yaml",children:"farmer.yaml"})]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"ip-addresses-and-docker",children:"IP Addresses and Docker"}),"\n",(0,s.jsx)(t.p,{children:"One thing to keep in mind is that the Dedicated Plotter and Dedicated Farmer will need to use the IP address of the Dedicated Cluster to connect to NATs. And the Dedicated Cluster will need to use the IP address of the Dedicated Node to connect the Controller to the Node. The rule of thumb is if the containers are on the same PC they can use the Docker IP or container name. But if they are on another PC you must use their internal IP address."}),"\n",(0,s.jsx)(t.p,{children:"Here is a demonstrated example"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"All in One",src:n(8460).A+"",width:"1365",height:"734"})}),"\n",(0,s.jsx)(t.p,{children:"As you can see, the dedicated Cluster uses the Docker IP to make the internal NATs connections. But since the Controller has to reach outside the Docker network to connect to the Node, we need to specify the IP address of the PC hosting the Node, and not the Docker IP. Same with the Plotter and Farmer."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},6394:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/all-in-one-845d15ca1bcd608dc8cfc4b3fe3daff1.png"},906:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/common_cluster-7c78a5f0c68aea2f5141205dd395ab82.png"},5562:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/complex_setup-e303eafbdd09a90f0618b8cdaf9303e2.png"},8460:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/ip_addresses-93f955c42ad9c9a3e94ece25b00949e3.png"},5078:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/minimal_cluster-a735ee6120ecaa6eec4dd655dbff5fc3.png"},3856:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/permissions-0f7cc20fec2e181e0f7c0ed4e25e3c1c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const o={},r=s.createContext(o);function a(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);