"use strict";(self.webpackChunkopenpathfinder_com=self.webpackChunkopenpathfinder_com||[]).push([[4212],{3250:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(6540);var o=s(4164),r=s(1213),a=s(7559),n=s(6461),u=s(8027),l=s(1463),i=s(1107),h=s(6913);const c={authorListItem:"authorListItem_n3yI"};var p=s(4848);function g(t){let{author:e}=t;return(0,p.jsx)("li",{className:c.authorListItem,children:(0,p.jsx)(h.A,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,p.jsx)("section",{className:(0,o.A)("margin-vert--lg",c.authorsListSection),children:(0,p.jsx)("ul",{children:e.map((t=>(0,p.jsx)(g,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const h=(0,n.uz)();return(0,p.jsxs)(r.e3,{className:(0,o.A)(a.G.wrapper.blogPages,a.G.page.blogAuthorsListPage),children:[(0,p.jsx)(r.be,{title:h}),(0,p.jsx)(l.A,{tag:"blog_authors_list"}),(0,p.jsxs)(u.A,{sidebar:s,children:[(0,p.jsx)(i.A,{as:"h1",children:h}),(0,p.jsx)(d,{authors:e})]})]})}},6461:(t,e,s)=>{s.d(e,{Y4:()=>h,np:()=>i,uz:()=>l,wI:()=>u});s(6540);var o=s(1312),r=s(5846),a=s(4848);function n(){const{selectMessage:t}=(0,r.W)();return e=>t(e,(0,o.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function u(t){const e=n();return(0,o.T)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:e(t.count),authorName:t.name||t.key})}const l=()=>(0,o.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function i(){return(0,a.jsx)(o.A,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function h(){return(0,a.jsx)(o.A,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}}}]);