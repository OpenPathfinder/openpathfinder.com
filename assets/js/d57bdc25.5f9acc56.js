"use strict";(self.webpackChunkopenpathfinder_com=self.webpackChunkopenpathfinder_com||[]).push([[5465],{27:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"checks/15","title":"Allow Only Admins to Create Public Repositories","description":"Description","source":"@site/docs/checks/adminRepoCreationOnly.mdx","sourceDirName":"checks","slug":"/checks/adminRepoCreationOnly","permalink":"/docs/checks/adminRepoCreationOnly","draft":false,"unlisted":false,"editUrl":"https://github.com/openPathfinder/openpathfinder.com/tree/main/packages/create-docusaurus/templates/shared/docs/checks/adminRepoCreationOnly.mdx","tags":[],"version":"current","sidebarPosition":13,"frontMatter":{"sidebar_position":13,"id":"15","title":"Allow Only Admins to Create Public Repositories","slug":"/checks/adminRepoCreationOnly"},"sidebar":"tutorialSidebar","previous":{"title":"Restrict Default GitHub Org Member Permissions","permalink":"/docs/checks/restrictedOrgPermissions"},"next":{"title":"Prevent Admins from Bypassing Branch Protection","permalink":"/docs/checks/preventBranchProtectionBypass"}}');var s=n(4848),o=n(8453);const r={sidebar_position:13,id:15,title:"Allow Only Admins to Create Public Repositories",slug:"/checks/adminRepoCreationOnly"},c=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"VisionBoard Inclusion",id:"visionboard-inclusion",level:2},{value:"FortSphere Inclusion",id:"fortsphere-inclusion",level:2},{value:"Details",id:"details",level:2}];function d(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"Only admins should be able to create public repositories"}),"\n",(0,s.jsx)(i.h2,{id:"visionboard-inclusion",children:"VisionBoard Inclusion"}),"\n",(0,s.jsxs)(i.p,{children:["We use the field ",(0,s.jsx)(i.code,{children:"members_can_create_public_repositories"})," from the GitHub Organization API to check if the project has enforced this policy. ",(0,s.jsx)(i.a,{href:"https://github.com/secure-dashboards/openjs-foundation-dashboard/issues/75",children:"More information"})]}),"\n",(0,s.jsx)(i.h2,{id:"fortsphere-inclusion",children:"FortSphere Inclusion"}),"\n",(0,s.jsxs)(i.p,{children:["The policy ",(0,s.jsx)(i.a,{href:"/docs/policies/restrictRepoCreationGitHub",children:"restrictRepoCreationGitHub"})," can solve this."]}),"\n",(0,s.jsx)(i.h2,{id:"details",children:"Details"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Default Category: user account permissions"}),"\n",(0,s.jsx)(i.li,{children:"Default Priority Group: P4"}),"\n",(0,s.jsxs)(i.li,{children:["Implementation Details: It is computed (",(0,s.jsx)(i.a,{href:"https://github.com/OpenPathfinder/visionBoard/issues/75",children:"details"}),")."]}),"\n",(0,s.jsx)(i.li,{children:"C-SCRM: true"}),"\n",(0,s.jsxs)(i.li,{children:["Mitre: ",(0,s.jsx)(i.a,{href:"https://capec.mitre.org/data/definitions/122.html",children:"CAPEC-122"})]}),"\n",(0,s.jsxs)(i.li,{children:["Sources: ",(0,s.jsx)(i.a,{href:"https://best.openssf.org/SCM-BestPractices/github/organization/non_admins_can_create_public_repositories.html",children:"OpenSSF SCM Best Practices"})]}),"\n",(0,s.jsxs)(i.li,{children:["How To: ",(0,s.jsx)(i.a,{href:"https://docs.github.com/en/organizations/managing-organization-settings/restricting-repository-creation-in-your-organization",children:"Github Docs"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var t=n(6540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);