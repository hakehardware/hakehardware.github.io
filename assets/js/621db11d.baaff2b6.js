"use strict";(self.webpackChunkhakehardware=self.webpackChunkhakehardware||[]).push([[212],{3250:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});s(6540);var a=s(4164),r=s(1213),o=s(7559),u=s(6461),l=s(8027),n=s(1463),h=s(1107),i=s(6913);const c={authorListItem:"authorListItem_n3yI"};var g=s(4848);function p(e){let{author:t}=e;return(0,g.jsx)("li",{className:c.authorListItem,children:(0,g.jsx)(i.A,{as:"h2",author:t,count:t.count})})}function d(e){let{authors:t}=e;return(0,g.jsx)("section",{className:(0,a.A)("margin-vert--lg",c.authorsListSection),children:(0,g.jsx)("ul",{children:t.map((e=>(0,g.jsx)(p,{author:e},e.key)))})})}function m(e){let{authors:t,sidebar:s}=e;const i=(0,u.uz)();return(0,g.jsxs)(r.e3,{className:(0,a.A)(o.G.wrapper.blogPages,o.G.page.blogAuthorsListPage),children:[(0,g.jsx)(r.be,{title:i}),(0,g.jsx)(n.A,{tag:"blog_authors_list"}),(0,g.jsxs)(l.A,{sidebar:s,children:[(0,g.jsx)(h.A,{as:"h1",children:i}),(0,g.jsx)(d,{authors:t})]})]})}},6461:(e,t,s)=>{s.d(t,{np:()=>h,uz:()=>n,wI:()=>l});s(6540);var a=s(1312),r=s(5846),o=s(4848);function u(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=u();return(0,a.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const n=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function h(){return(0,o.jsx)(a.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}}}]);