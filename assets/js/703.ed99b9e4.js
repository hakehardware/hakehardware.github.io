"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[703],{4096:(e,t,a)=>{a.d(t,{in:()=>c,OU:()=>C,Ki:()=>_,kJ:()=>x,x:()=>l,e7:()=>m,J_:()=>f,Gx:()=>A});var s=a(6540),n=a(9532),i=a(6803),r=a(4848);function l(){const e=(0,i.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}const o=s.createContext(null);function c(e){let{children:t,content:a,isBlogPostPage:n=!1}=e;const i=function(e){let{content:t,isBlogPostPage:a}=e;return(0,s.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a})),[t,a])}({content:a,isBlogPostPage:n});return(0,r.jsx)(o.Provider,{value:i,children:t})}function m(){const e=(0,s.useContext)(o);if(null===e)throw new n.dV("BlogPostProvider");return e}var u=a(6025),h=a(4586);const d=e=>new Date(e).toISOString();function g(e){const t=e.map(v);return{author:1===t.length?t[0]:t}}function p(e,t,a){return e?{image:j({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${a}`})}:{}}function x(e){const{siteConfig:t}=(0,h.A)(),{withBaseUrl:a}=(0,u.hH)(),{metadata:{blogDescription:s,blogTitle:n,permalink:i}}=e,r=`${t.url}${i}`;return{"@context":"https://schema.org","@type":"Blog","@id":r,mainEntityOfPage:r,headline:n,description:s,blogPost:e.items.map((e=>function(e,t,a){const{assets:s,frontMatter:n,metadata:i}=e,{date:r,title:l,description:o,lastUpdatedAt:c}=i,m=s.image??n.image,u=n.keywords??[],h=`${t.url}${i.permalink}`,x=c?d(c):void 0;return{"@type":"BlogPosting","@id":h,mainEntityOfPage:h,url:h,headline:l,name:l,description:o,datePublished:r,...x?{dateModified:x}:{},...g(i.authors),...p(m,a,l),...u?{keywords:u}:{}}}(e.content,t,a)))}}function f(){const e=l(),{assets:t,metadata:a}=m(),{siteConfig:s}=(0,h.A)(),{withBaseUrl:n}=(0,u.hH)(),{date:i,title:r,description:o,frontMatter:c,lastUpdatedAt:x}=a,f=t.image??c.image,v=c.keywords??[],j=x?d(x):void 0,b=`${s.url}${a.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:r,name:r,description:o,datePublished:i,...j?{dateModified:j}:{},...g(a.authors),...p(f,n,r),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${s.url}${e.blogBasePath}`,name:e.blogTitle}}}function v(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function j(e){let{imageUrl:t,caption:a}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:a}}var b=a(6347),w=a(8774),N=a(1682),k=a(9169);function A(e){const{pathname:t}=(0,b.zy)();return(0,s.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,k.ys)(e.permalink,t))}(e,t)))),[e,t])}function _(e){const t=(0,N.$z)(e,(e=>`${new Date(e.date).getFullYear()}`)),a=Object.entries(t);return a.reverse(),a}function C(e){let{items:t,ulClassName:a,liClassName:s,linkClassName:n,linkActiveClassName:i}=e;return(0,r.jsx)("ul",{className:a,children:t.map((e=>(0,r.jsx)("li",{className:s,children:(0,r.jsx)(w.A,{isNavLink:!0,to:e.permalink,className:n,activeClassName:i,children:e.title})},e.permalink)))})}},8027:(e,t,a)=>{a.d(t,{A:()=>I});var s=a(6540),n=a(4164),i=a(781),r=a(4581),l=a(1312),o=a(4096),c=a(6342),m=a(1107),u=a(4848);function h(e){let{year:t,yearGroupHeadingClassName:a,children:s}=e;return(0,u.jsxs)("div",{role:"group",children:[(0,u.jsx)(m.A,{as:"h3",className:a,children:t}),s]})}function d(e){let{items:t,yearGroupHeadingClassName:a,ListComponent:s}=e;if((0,c.p)().blog.sidebar.groupByYear){const e=(0,o.Ki)(t);return(0,u.jsx)(u.Fragment,{children:e.map((e=>{let[t,n]=e;return(0,u.jsx)(h,{year:t,yearGroupHeadingClassName:a,children:(0,u.jsx)(s,{items:n})},t)}))})}return(0,u.jsx)(s,{items:t})}const g=(0,s.memo)(d),p="sidebar_re4s",x="sidebarItemTitle_pO2u",f="sidebarItemList_Yudw",v="sidebarItem__DBe",j="sidebarItemLink_mo7H",b="sidebarItemLinkActive_I1ZP",w="yearGroupHeading_rMGB",N=e=>{let{items:t}=e;return(0,u.jsx)(o.OU,{items:t,ulClassName:(0,n.A)(f,"clean-list"),liClassName:v,linkClassName:j,linkActiveClassName:b})};function k(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,u.jsx)("aside",{className:"col col--3",children:(0,u.jsxs)("nav",{className:(0,n.A)(p,"thin-scrollbar"),"aria-label":(0,l.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,u.jsx)("div",{className:(0,n.A)(x,"margin-bottom--md"),children:t.title}),(0,u.jsx)(g,{items:a,ListComponent:N,yearGroupHeadingClassName:w})]})})}const A=(0,s.memo)(k);var _=a(5600);const C="yearGroupHeading_QT03",M=e=>{let{items:t}=e;return(0,u.jsx)(o.OU,{items:t,ulClassName:"menu__list",liClassName:"menu__list-item",linkClassName:"menu__link",linkActiveClassName:"menu__link--active"})};function y(e){let{sidebar:t}=e;const a=(0,o.Gx)(t.items);return(0,u.jsx)(g,{items:a,ListComponent:M,yearGroupHeadingClassName:C})}function P(e){return(0,u.jsx)(_.GX,{component:y,props:e})}const B=(0,s.memo)(P);function L(e){let{sidebar:t}=e;const a=(0,r.l)();return t?.items.length?"mobile"===a?(0,u.jsx)(B,{sidebar:t}):(0,u.jsx)(A,{sidebar:t}):null}function I(e){const{sidebar:t,toc:a,children:s,...r}=e,l=t&&t.items.length>0;return(0,u.jsx)(i.A,{...r,children:(0,u.jsx)("div",{className:"container margin-vert--lg",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)(L,{sidebar:t}),(0,u.jsx)("main",{className:(0,n.A)("col",{"col--7":l,"col--9 col--offset-1":!l}),children:s}),a&&(0,u.jsx)("div",{className:"col col--2",children:a})]})})})}},6913:(e,t,a)=>{a.d(t,{A:()=>j});a(6540);var s=a(4164),n=a(8774),i=a(4848);const r="githubSvg_Uu4N";const l="xSvg_y3PF";const o=function(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",...e,children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"}),(0,i.jsx)("path",{d:"M3.6 9h16.8"}),(0,i.jsx)("path",{d:"M3.6 15h16.8"}),(0,i.jsx)("path",{d:"M11.5 3a17 17 0 0 0 0 18"}),(0,i.jsx)("path",{d:"M12.5 3a17 17 0 0 1 0 18"})]})},c={authorSocials:"authorSocials_rSDt",authorSocialLink:"authorSocialLink_owbf",authorSocialIcon:"authorSocialIcon_XYv3"},m={twitter:{Icon:function(e){return(0,i.jsx)("svg",{viewBox:"0 0 256 209",width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",...e,children:(0,i.jsx)("path",{d:"M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45",fill:"#55acee"})})},label:"Twitter"},github:{Icon:function(e){return(0,i.jsx)("svg",{viewBox:"0 0 256 250",width:"1em",height:"1em",...e,className:(0,s.A)(e.className,r),xmlns:"http://www.w3.org/2000/svg",style:{"--dark":"#000","--light":"#fff"},preserveAspectRatio:"xMidYMid",children:(0,i.jsx)("path",{d:"M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"})})},label:"GitHub"},stackoverflow:{Icon:function(e){return(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 169.61 200",width:"1em",height:"1em",...e,children:[(0,i.jsx)("path",{d:"M140.44 178.38v-48.65h21.61V200H0v-70.27h21.61v48.65z",fill:"#bcbbbb"}),(0,i.jsx)("path",{d:"M124.24 140.54l4.32-16.22-86.97-17.83-3.78 17.83zM49.7 82.16L130.72 120l7.56-16.22-81.02-37.83zm22.68-40l68.06 57.3 11.35-13.51-68.6-57.3-11.35 13.51zM116.14 0l-14.59 10.81 53.48 71.89 14.58-10.81zM37.81 162.16h86.43v-16.21H37.81z",fill:"#f48024"})]})},label:"Stack Overflow"},linkedin:{Icon:function(e){return(0,i.jsx)("svg",{width:"1em",height:"1em",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",viewBox:"0 0 256 256",...e,children:(0,i.jsx)("path",{d:"M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453",fill:"#0A66C2"})})},label:"LinkedIn"},x:{Icon:function(e){return(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 1200 1227",...e,className:(0,s.A)(e.className,l),style:{"--dark":"#000","--light":"#fff"},children:(0,i.jsx)("path",{d:"M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z"})})},label:"X"}};function u(e){let{platform:t,link:a}=e;const{Icon:r,label:l}=m[u=t]??{Icon:o,label:u};var u;return(0,i.jsx)(n.A,{className:c.authorSocialLink,href:a,title:l,children:(0,i.jsx)(r,{className:(0,s.A)(c.authorSocialLink)})})}function h(e){let{author:t}=e;const a=Object.entries(t.socials??{});return(0,i.jsx)("div",{className:c.authorSocials,children:a.map((e=>{let[t,a]=e;return(0,i.jsx)(u,{platform:t,link:a},t)}))})}var d=a(1107);const g={authorImage:"authorImage_XqGP","author-as-h1":"author-as-h1_n9oJ","author-as-h2":"author-as-h2_gXvM",authorDetails:"authorDetails_lV9A",authorName:"authorName_yefp",authorTitle:"authorTitle_nd0D",authorBlogPostCount:"authorBlogPostCount_iiJ5"};function p(e){return e.href?(0,i.jsx)(n.A,{...e}):(0,i.jsx)(i.Fragment,{children:e.children})}function x(e){let{title:t}=e;return(0,i.jsx)("small",{className:g.authorTitle,title:t,children:t})}function f(e){let{name:t,as:a}=e;return a?(0,i.jsx)(d.A,{as:a,className:g.authorName,children:t}):(0,i.jsx)("span",{className:g.authorName,children:t})}function v(e){let{count:t}=e;return(0,i.jsx)("span",{className:(0,s.A)(g.authorBlogPostCount),children:t})}function j(e){let{as:t,author:a,className:n,count:r}=e;const{name:l,title:o,url:c,imageURL:m,email:u,page:d}=a,j=d?.permalink||c||u&&`mailto:${u}`||void 0;return(0,i.jsxs)("div",{className:(0,s.A)("avatar margin-bottom--sm",n,g[`author-as-${t}`]),children:[m&&(0,i.jsx)(p,{href:j,className:"avatar__photo-link",children:(0,i.jsx)("img",{className:(0,s.A)("avatar__photo",g.authorImage),src:m,alt:l})}),(l||o)&&(0,i.jsxs)("div",{className:(0,s.A)("avatar__intro",g.authorDetails),children:[(0,i.jsxs)("div",{className:"avatar__name",children:[l&&(0,i.jsx)(p,{href:j,children:(0,i.jsx)(f,{name:l,as:t})}),r&&(0,i.jsx)(v,{count:r})]}),!!o&&(0,i.jsx)(x,{title:o}),(0,i.jsx)(h,{author:a})]})]})}}}]);