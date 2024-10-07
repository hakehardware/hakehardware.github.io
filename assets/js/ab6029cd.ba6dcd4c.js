"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[170],{5415:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>o});var r=t(4848),n=t(8453);const i={title:"Prepare Micro SD Card"},a=void 0,d={id:"guides/comet/prepare-micro-sd-card",title:"Prepare Micro SD Card",description:"Introduction",source:"@site/docs/guides/comet/prepare-micro-sd-card.md",sourceDirName:"guides/comet",slug:"/guides/comet/prepare-micro-sd-card",permalink:"/docs/guides/comet/prepare-micro-sd-card",draft:!1,unlisted:!1,editUrl:"https://github.com/hakehardware/hakehardware.github.io/edit/main/docs/guides/comet/prepare-micro-sd-card.md",tags:[],version:"current",frontMatter:{title:"Prepare Micro SD Card"},sidebar:"guides",previous:{title:"Install OS on eMMC using SD Card",permalink:"/docs/guides/comet/install-os-on-comet"},next:{title:"Write an OS Image to micro SD Card",permalink:"/docs/guides/comet/write-image-to-sd-card"}},s={},o=[{value:"Introduction",id:"introduction",level:2},{value:"Clean the Micro SD Card",id:"clean-the-micro-sd-card",level:3},{value:"Reset the SD Card",id:"reset-the-sd-card",level:3}];function l(A){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,n.R)(),...A.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(e.p,{children:"Before writing an image to a micro SD Card, it is a good idea to prepare the card by cleaning and resetting it. This is done using a tool from the SD Association. This guide is written for Windows."}),"\n",(0,r.jsx)(e.h3,{id:"clean-the-micro-sd-card",children:"Clean the Micro SD Card"}),"\n",(0,r.jsxs)(e.p,{children:["Install the micro SD card into your Windows PC and open up Diskpart. You can do this by pressing ",(0,r.jsx)(e.code,{children:"WIN + x"}),", and then selecting ",(0,r.jsx)(e.code,{children:"Terminal (Admin)"}),". Then type"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"diskpart\n"})}),"\n",(0,r.jsx)(e.p,{children:"Find the disk number for your micro SD card with"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"list disk\n"})}),"\n",(0,r.jsx)(e.p,{children:"On my system it was obvious as I have a 16GB card (shows as 14GB)"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"list-disk",src:t(4289).A+"",width:"545",height:"247"})}),"\n",(0,r.jsx)(e.p,{children:"Select the disk"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"select disk <YOUR DISK NUMBER>\n"})}),"\n",(0,r.jsx)(e.admonition,{type:"warning",children:(0,r.jsx)(e.p,{children:"The next step will erase the data on the selected disk. Make absolutely sure it is the right disk. The data will be lost."})}),"\n",(0,r.jsx)(e.p,{children:"Clean the disk with"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"clean\n"})}),"\n",(0,r.jsx)(e.p,{children:"Now create a primary partition"}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-bash",children:"create partition primary\n"})}),"\n",(0,r.jsx)(e.h3,{id:"reset-the-sd-card",children:"Reset the SD Card"}),"\n",(0,r.jsxs)(e.p,{children:["Download the ",(0,r.jsx)(e.a,{href:"https://www.sdcard.org/downloads/formatter/",children:"SD Memory Card Formatter"})," from the SD Association site. You will need to scroll down a bit and select Windows"]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"sd-card-formatter",src:t(5070).A+"",width:"674",height:"167"})}),"\n",(0,r.jsx)(e.p,{children:"On the next page, scroll to the bottom and accept the terms. This will start the download. Once downloaded, extract the file and install the SD Card Formatter. Once installed, open it up"}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"sd-card-formatter-open",src:t(1745).A+"",width:"469",height:"514"})}),"\n",(0,r.jsx)(e.p,{children:'Select the appropriate card, and click the "Format" button. It should not take too long, and you should get a pop up stating it was successful'}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"sd-card-formatter-success",src:t(3744).A+"",width:"464",height:"510"})}),"\n",(0,r.jsx)(e.p,{children:"The micro SD Card is now prepared."})]})}function c(A={}){const{wrapper:e}={...(0,n.R)(),...A.components};return e?(0,r.jsx)(e,{...A,children:(0,r.jsx)(l,{...A})}):l(A)}},4289:(A,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/list-disk-6c1a01ebf1313b94ac9024df4e9fdc2d.png"},1745:(A,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/sd-card-formatter-open-498b32805f7da5ab90ffcec236d68686.png"},3744:(A,e,t)=>{t.d(e,{A:()=>r});const r=t.p+"assets/images/sd-card-formatter-success-f3b381445d3690dff9f804a561bb551e.png"},5070:(A,e,t)=>{t.d(e,{A:()=>r});const r="data:image/png;base64,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"},8453:(A,e,t)=>{t.d(e,{R:()=>a,x:()=>d});var r=t(6540);const n={},i=r.createContext(n);function a(A){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function d(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(n):A.components||n:a(A.components),r.createElement(i.Provider,{value:e},A.children)}}}]);