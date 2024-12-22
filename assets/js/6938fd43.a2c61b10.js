"use strict";(self.webpackChunkopenpathfinder_com=self.webpackChunkopenpathfinder_com||[]).push([[4300],{6733:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"projects/fortSphere/usage","title":"Usage","description":"If you are not familiar with the tool checkout this demo","source":"@site/docs/projects/fortSphere/usage.md","sourceDirName":"projects/fortSphere","slug":"/fortSphere/usage","permalink":"/docs/fortSphere/usage","draft":false,"unlisted":false,"editUrl":"https://github.com/openPathfinder/openpathfinder.com/tree/main/packages/create-docusaurus/templates/shared/docs/projects/fortSphere/usage.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3,"title":"Usage","slug":"/fortSphere/usage"},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/docs/fortSphere/installation"},"next":{"title":"Policies","permalink":"/docs/fortSphere/policies"}}');var i=o(4848),r=o(8453);const s={sidebar_position:3,title:"Usage",slug:"/fortSphere/usage"},a=void 0,l={},c=[{value:"Version Command",id:"version-command",level:3},{value:"Policy Management Command",id:"policy-management-command",level:3},{value:"GitHub Tokens",id:"github-tokens",level:3},{value:"Injecting the Token",id:"injecting-the-token",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["If you are not familiar with the tool ",(0,i.jsx)(n.a,{href:"/docs/fortSphere#demo-walkthrough",children:"checkout this demo"})]})}),"\n",(0,i.jsx)(n.h3,{id:"version-command",children:"Version Command"}),"\n",(0,i.jsx)(n.p,{children:"Display the current version of fortSphere:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"fortsphere version\n"})}),"\n",(0,i.jsx)(n.h3,{id:"policy-management-command",children:"Policy Management Command"}),"\n",(0,i.jsx)(n.p,{children:"Manage policies for your GitHub organization:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["List all available policies:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"fortsphere policy --list\n"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Apply a policy to a GitHub organization:","\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"fortsphere policy --apply <policy> --github-org <githubOrg>\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"github-tokens",children:"GitHub Tokens"}),"\n",(0,i.jsxs)(n.p,{children:["To run this application, you need a GitHub token with ",(0,i.jsx)(n.code,{children:"admin:write"})," permissions."]}),"\n",(0,i.jsx)(n.h4,{id:"injecting-the-token",children:"Injecting the Token"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Use an environment variable named ",(0,i.jsx)(n.code,{children:"GITHUB_TOKEN"})," to supply the token."]}),"\n",(0,i.jsxs)(n.li,{children:["Alternatively, you can use a ",(0,i.jsx)(n.code,{children:".env"})," file and load it with the command ",(0,i.jsx)(n.code,{children:"node --env-file=.env fortsphere.js policy --apply <policy> --github-org <githubOrg>"})," when doing local development"]}),"\n",(0,i.jsxs)(n.li,{children:["While using docker images you can use ",(0,i.jsx)(n.code,{children:"docker run --rm -e GITHUB_TOKEN=mytoken ghcr.io/openpathfinder/fortsphere:latest policy --apply <policy> --github-org <githubOrg>"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>a});var t=o(6540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);