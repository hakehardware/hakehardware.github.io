"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[4998],{5669:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>h});var t=o(4848),i=o(8453);const s={title:"Prometheus & Grafana Monitoring"},a=void 0,r={id:"guides/autonomys/enable-grafana-metrics",title:"Prometheus & Grafana Monitoring",description:"This guide was created for Gemeni 3h testnet and will be updated to mainnet once released.",source:"@site/docs/guides/autonomys/enable-grafana-metrics.md",sourceDirName:"guides/autonomys",slug:"/guides/autonomys/enable-grafana-metrics",permalink:"/docs/guides/autonomys/enable-grafana-metrics",draft:!1,unlisted:!1,editUrl:"https://github.com/hakehardware/hakehardware.github.io/edit/main/docs/guides/autonomys/enable-grafana-metrics.md",tags:[],version:"current",frontMatter:{title:"Prometheus & Grafana Monitoring"},sidebar:"guides",previous:{title:"Advanced Clusters",permalink:"/docs/guides/autonomys/advanced-clusters"}},d={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Enabling Prometheus Metrics",id:"enabling-prometheus-metrics",level:2},{value:"Docker Users",id:"docker-users",level:3},{value:"Non-Docker",id:"non-docker",level:3},{value:"Update your Prometheus config",id:"update-your-prometheus-config",level:2},{value:"Grafana Dashboard",id:"grafana-dashboard",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{type:"warning",children:(0,t.jsx)(n.p,{children:"This guide was created for Gemeni 3h testnet and will be updated to mainnet once released."})}),"\n",(0,t.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsx)(n.p,{children:"Monitoring your Autonomys Nodes and Clusters can be a bit of a pain as you scale up your hardware, but Grafana can help with that! To follow this guide there are a few prerequisites:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-docker-debian",children:"Install Docker on Debian"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/install-portainer-host-agent",children:"Install Portainer"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hakehardware.github.io/docs/guides/linux/use-grafana-to-monitor-system",children:"Set up Grafana"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"enabling-prometheus-metrics",children:"Enabling Prometheus Metrics"}),"\n",(0,t.jsx)(n.h3,{id:"docker-users",children:"Docker Users"}),"\n",(0,t.jsxs)(n.p,{children:["To get metrics from your Node and/or Cluster, you need to turn on prometheus metrics. This can be added easily by including the ",(0,t.jsx)(n.code,{children:"--prometheus-listen-on 0.0.0.0:<PORT>"})," in your stack/docker-compose files. Then make sure to expose the port. To see some examples check out some of the autonomys yaml files I have on my github."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/hakehardware/autonomys_files",children:"autonomys files"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Note that if you are running multiple Cluster components on a single PC, you need to enable metrics for each component, and use a different port for each one. An example of this is the ",(0,t.jsx)(n.code,{children:"cluster-gpu.yaml"})," file on my github."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/hakehardware/autonomys_files/blob/main/cluster-gpu.yaml",children:"cluster-gpu.yaml"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"listen-on",src:o(6366).A+"",width:"371",height:"488"})}),"\n",(0,t.jsx)(n.p,{children:"Restart your containers after enabling Prometheus metrics."}),"\n",(0,t.jsx)(n.h3,{id:"non-docker",children:"Non-Docker"}),"\n",(0,t.jsx)(n.p,{children:"TODO"}),"\n",(0,t.jsx)(n.h2,{id:"update-your-prometheus-config",children:"Update your Prometheus config"}),"\n",(0,t.jsxs)(n.p,{children:["We need to add a new job in our Prometheus config for Autonomys. If you have multiple PCs you can add them all under this section. Open up your Prometheus config (if you followed my guide it is probably ",(0,t.jsx)(n.code,{children:"~/prometheus/config.yaml"}),")."]}),"\n",(0,t.jsxs)(n.p,{children:["I will add a new job ",(0,t.jsx)(n.code,{children:"autonomys"})," with a target containing the internal IP of my ",(0,t.jsx)(n.code,{children:"comet-alpha"})," PC which is ",(0,t.jsx)(n.code,{children:"192.168.69.111"}),". In my stack file I have metrics exposed on port ",(0,t.jsx)(n.code,{children:"9083"}),". This PC is ONLY running a farmer."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"comet-alpha-farmer",src:o(2758).A+"",width:"352",height:"128"})}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["If your Autonomys container is on the same PC as your Prometheus container, use the Gateway IP of the Docker network it is hosted on. Typically in my guides that would ",(0,t.jsx)(n.code,{children:"172.25.0.1"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:'As always, save your config and restart Prometheus. You can check the "Targets" on the Prometheus Web UI to see a connection was able to be made.'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"target-up",src:o(2700).A+"",width:"865",height:"150"})}),"\n",(0,t.jsx)(n.h2,{id:"grafana-dashboard",children:"Grafana Dashboard"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Depending on what targets you have added for your Autonomys components, not all dashboard components may load. For instance I only loaded the Cluster Farmer in the above example, and I do not get ",(0,t.jsx)(n.code,{children:"Peers"})," because that is specific to a Node."]})}),"\n",(0,t.jsxs)(n.p,{children:['Open up Grafana and go to the Dashboards page, then click "New" and select "Import" from the dropdown. In the "URL or ID" input, paste in ',(0,t.jsx)(n.code,{children:"20433"}),' and click "Load". This is a pre-built dashboard by community member ',(0,t.jsx)(n.code,{children:"zulkis"}),"."]}),"\n",(0,t.jsx)(n.p,{children:'I usually update the name, UID, and then make sure to select the correct prometheus instance. Then click "Import".'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dashboard-config",src:o(8468).A+"",width:"650",height:"436"})}),"\n",(0,t.jsx)(n.p,{children:"You should now see your Dashboard."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"dashboard",src:o(8339).A+"",width:"1173",height:"501"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},2758:(e,n,o)=>{o.d(n,{A:()=>t});const t="data:image/png;base64,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"},8468:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/dashboard-config-576533bf87622582139d3862d8be1961.png"},8339:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/dashboard-89986911ae2ddb0bb5f922f95e73d040.png"},6366:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/listen-on-87c8e3a1c9c86a3d65489ee271f2e856.png"},2700:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/target-up-bfa5afe5dde526025000eac4455b1ba4.png"},8453:(e,n,o)=>{o.d(n,{R:()=>a,x:()=>r});var t=o(6540);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);