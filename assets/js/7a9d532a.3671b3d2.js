"use strict";(self.webpackChunkopenpathfinder_com=self.webpackChunkopenpathfinder_com||[]).push([[8715],{793:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"checks/7","title":"Check sensitive information","description":"Description","source":"@site/docs/checks/noSensitiveInfoInRepositories.mdx","sourceDirName":"checks","slug":"/checks/noSensitiveInfoInRepositories","permalink":"/docs/checks/noSensitiveInfoInRepositories","draft":false,"unlisted":false,"editUrl":"https://github.com/openPathfinder/openpathfinder.com/tree/main/packages/create-docusaurus/templates/shared/docs/checks/noSensitiveInfoInRepositories.mdx","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"id":"7","title":"Check sensitive information","slug":"/checks/noSensitiveInfoInRepositories"},"sidebar":"tutorialSidebar","previous":{"title":"Use MFA against impersonation","permalink":"/docs/checks/MFAImpersonationDefense"},"next":{"title":"Ensure that the secrets are injected at runtime","permalink":"/docs/checks/injectedSecretsAtRuntime"}}');var s=n(4848),o=n(8453);const r={sidebar_position:5,id:7,title:"Check sensitive information",slug:"/checks/noSensitiveInfoInRepositories"},c=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"VisionBoard Inclusion",id:"visionboard-inclusion",level:2},{value:"Details",id:"details",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(i.p,{children:"No secrets or credentials are included in the source code"}),"\n",(0,s.jsx)(i.h2,{id:"visionboard-inclusion",children:"VisionBoard Inclusion"}),"\n",(0,s.jsxs)(i.p,{children:["We checked the ",(0,s.jsx)(i.code,{children:"secret_scanning_enabled_for_new_repositories"})," field in the GitHub Organization API and\nthe ",(0,s.jsx)(i.code,{children:"secret_scanning_status"})," field in the GitHub Repositories API to verify if the project has enforced\nthis policy, ",(0,s.jsx)(i.a,{href:"https://github.com/OpenPathfinder/visionBoard/issues/67",children:"more information"})]}),"\n",(0,s.jsx)(i.h2,{id:"details",children:"Details"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Default Category: service authentication"}),"\n",(0,s.jsx)(i.li,{children:"Default Priority Group: P2"}),"\n",(0,s.jsxs)(i.li,{children:["Implementation Details: It is computed (",(0,s.jsx)(i.a,{href:"https://github.com/OpenPathfinder/visionBoard/issues/67",children:"details"}),")."]}),"\n",(0,s.jsx)(i.li,{children:"C-SCRM: true"}),"\n",(0,s.jsxs)(i.li,{children:["Mitre: ",(0,s.jsx)(i.a,{href:"https://cwe.mitre.org/data/definitions/540.html",children:"CWE-540"})]}),"\n",(0,s.jsxs)(i.li,{children:["Sources: ",(0,s.jsx)(i.a,{href:"https://www.bestpractices.dev/en/criteria#0.no_leaked_credentials",children:"OpenSSF Best Practices Badge Passing Level (no_leaked_credentials)"})]}),"\n",(0,s.jsxs)(i.li,{children:["How To: ",(0,s.jsx)(i.a,{href:"https://docs.github.com/en/code-security/secret-scanning/about-secret-scanning",children:"Github Docs"})]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>c});var t=n(6540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);