"use strict";(self.webpackChunkopenpathfinder_com=self.webpackChunkopenpathfinder_com||[]).push([[7780],{3296:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>o,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"projects/visionBoard/checks","title":"Checks","description":"VisionBoard empowers organizations to streamline their security and compliance processes with a comprehensive collection of automated checks. These checks are designed to evaluate the health and security posture of your projects, ensuring alignment with industry standards.","source":"@site/docs/projects/visionBoard/checks.md","sourceDirName":"projects/visionBoard","slug":"/visionBoard/Checks","permalink":"/docs/visionBoard/Checks","draft":false,"unlisted":false,"editUrl":"https://github.com/openPathfinder/openpathfinder.com/tree/main/packages/create-docusaurus/templates/shared/docs/projects/visionBoard/checks.md","tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"title":"Checks","slug":"/visionBoard/Checks"},"sidebar":"tutorialSidebar","previous":{"title":"Database Management","permalink":"/docs/visionBoard/database-management"},"next":{"title":"Checklists","permalink":"/docs/visionBoard/checklists"}}');var r=n(4848),c=n(8453);const o={sidebar_position:10,title:"Checks",slug:"/visionBoard/Checks"},t=void 0,l={},h=[];function d(e){const s={a:"a",li:"li",p:"p",strong:"strong",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"VisionBoard empowers organizations to streamline their security and compliance processes with a comprehensive collection of automated checks. These checks are designed to evaluate the health and security posture of your projects, ensuring alignment with industry standards."}),"\n",(0,r.jsxs)(s.p,{children:["While you can use checks individually, most users prefer to group them into ",(0,r.jsx)(s.a,{href:"/docs/visionBoard/checklists",children:"Checklists"})," tailored to specific standards or policies, such as OpenJS compliance frameworks. Checklists allow you to customize check priorities, adjust severity levels, and subscribe to specific compliance requirements for your projects."]}),"\n",(0,r.jsx)(s.p,{children:"Explore the full list of available checks below:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/owaspTop10Training",children:"owaspTop10Training"})}),": Training on OWASP Top 10 or equivalent"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/npmOrgMFA",children:"npmOrgMFA"})}),": Enforce MFA in npm organization(s)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/orgToolingMFA",children:"orgToolingMFA"})}),": Enforce MFA in all the tools"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/MFAImpersonationDefense",children:"MFAImpersonationDefense"})}),": Use MFA against impersonation"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/noSensitiveInfoInRepositories",children:"noSensitiveInfoInRepositories"})}),": Check sensitive information"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/injectedSecretsAtRuntime",children:"injectedSecretsAtRuntime"})}),": Ensure that the secrets are injected at runtime"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/scanCommitsForSensitiveInfo",children:"scanCommitsForSensitiveInfo"})}),": Ensure that all the commits are scanned"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/preventLandingSensitiveCommits",children:"preventLandingSensitiveCommits"})}),": Block new commits with secrets or credentials"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/SSHKeysRequired",children:"SSHKeysRequired"})}),": Use SSH keys with passphrases for repository access"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/npmPublicationMFA",children:"npmPublicationMFA"})}),": Publish to npm using MFA-Enabled accounts"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/githubWebhookSecrets",children:"githubWebhookSecrets"})}),": Secure GitHub Webhooks with secrets"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/requireCodeOwnersReviewForLargeTeams",children:"requireCodeOwnersReviewForLargeTeams"})}),": Require code owners review"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/restrictedOrgPermissions",children:"restrictedOrgPermissions"})}),": Restrict default GitHub Org member permissions"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/preventBranchProtectionBypass",children:"preventBranchProtectionBypass"})}),": Prevent admins from bypassing branch protection"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/defineFunctionalRoles",children:"defineFunctionalRoles"})}),": Define roles aligned to functional responsibilities"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/githubWriteAccessRoles",children:"githubWriteAccessRoles"})}),": Define teams/individuals with write access to repositories"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/twoOrMoreOwnersForAccess",children:"twoOrMoreOwnersForAccess"})}),": Configure two or more owners for access continuity"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/patchCriticalVulns30Days",children:"patchCriticalVulns30Days"})}),": Patch actively exploited critical vulnerabilities within 30 Days"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/patchNonCriticalVulns90Days",children:"patchNonCriticalVulns90Days"})}),": Patch non-critical vulnerabilities within 90 days"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/automateVulnDetection",children:"automateVulnDetection"})}),": Automate dependency vulnerability identification"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/staticCodeAnalysis",children:"staticCodeAnalysis"})}),": Use automated static code analysis tools"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/resolveLinterWarnings",children:"resolveLinterWarnings"})}),": Address compiler and linter warnings before merging"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/staticAppSecTesting",children:"staticAppSecTesting"})}),": Use static application security testing for all commits"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/commitStatusChecks",children:"commitStatusChecks"})}),": Require commit status checks to pass before merging"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/securityMdMeetsOpenJSCVD",children:"securityMdMeetsOpenJSCVD"})}),": Ensure Security.md meets OpenJS CVD guidelines"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/useCVDToolForVulns",children:"useCVDToolForVulns"})}),": Use CVD tools to manage vulnerability reports"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/vulnResponse14Days",children:"vulnResponse14Days"})}),": Respond to external vulnerability reports in under 14 days"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/incidentResponsePlan",children:"incidentResponsePlan"})}),": Define clear communication and incident response plans"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/assignCVEForKnownVulns",children:"assignCVEForKnownVulns"})}),": Assign CVEs to all known security vulnerabilities"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/includeCVEInReleaseNotes",children:"includeCVEInReleaseNotes"})}),": Include CVE IDs in release notes for security fixes"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/regressionTestsForVulns",children:"regressionTestsForVulns"})}),": Create regression tests for bugs and security vulnerabilities"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/defaultTokenPermissionsReadOnly",children:"defaultTokenPermissionsReadOnly"})}),": Set default GitHub workflow token permissions to read-only"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/blockWorkflowPRApproval",children:"blockWorkflowPRApproval"})}),": Prevent workflows from creating or approving PRs"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/noForcePushDefaultBranch",children:"noForcePushDefaultBranch"})}),": Disable force push on default branch"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/preventDeletionDefaultBranch",children:"preventDeletionDefaultBranch"})}),": Prevent deletion of default branch"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/upToDateDefaultBranchBeforeMerge",children:"upToDateDefaultBranchBeforeMerge"})}),": Require default branch updates before merging"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/restrictOrgSecrets",children:"restrictOrgSecrets"})}),": Restrict GitHub organization secrets to specific repositories"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/verifiedActionsOnly",children:"verifiedActionsOnly"})}),": Limit GitHub Actions to verified or trusted actions"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/noSelfHostedRunners",children:"noSelfHostedRunners"})}),": Disable self-hosted runners in GitHub organization"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/noArbitraryCodeInPipeline",children:"noArbitraryCodeInPipeline"})}),": Restrict build pipeline code execution to build scripts"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/limitWorkflowWritePermissions",children:"limitWorkflowWritePermissions"})}),": Limit workflow write permissions to job level"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/preventScriptInjection",children:"preventScriptInjection"})}),": Avoid script injection from untrusted variables"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/consistentBuildProcessDocs",children:"consistentBuildProcessDocs"})}),": Document consistent and automated build processes"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/upgradePathDocs",children:"upgradePathDocs"})}),": Support older versions or provide upgrade paths"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/softwareArchitectureDocs",children:"softwareArchitectureDocs"})}),": Document software architecture"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/ciAndCdPipelineAsCode",children:"ciAndCdPipelineAsCode"})}),": Automate CI/CD steps in code-based pipelines"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/pinActionsToSHA",children:"pinActionsToSHA"})}),": Pin actions with secrets to full-length commit SHAs"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/automateDependencyManagement",children:"automateDependencyManagement"})}),": Automate monitoring of outdated dependencies"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/machineReadableDependencies",children:"machineReadableDependencies"})}),": Provide machine-readable dependency lists"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/identifyModifiedDependencies",children:"identifyModifiedDependencies"})}),": Uniquely identify modified dependencies"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/annualDependencyRefresh",children:"annualDependencyRefresh"})}),": Refresh dependencies with annual releases"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/useHwKeyGithubAccess",children:"useHwKeyGithubAccess"})}),": Use AAL2/3 passkeys for GitHub access"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/useHwKeyGithubNonInteractive",children:"useHwKeyGithubNonInteractive"})}),": Use AAL2/3 passkeys for non-interactive GitHub access"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/useHwKeyOtherContexts",children:"useHwKeyOtherContexts"})}),": Use AAL2/3 passkeys in all other contexts"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/forkWorkflowApproval",children:"forkWorkflowApproval"})}),": Require approval for forked workflow changes"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/workflowSecurityScanner",children:"workflowSecurityScanner"})}),": Use workflow security scanners"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/runnerSecurityScanner",children:"runnerSecurityScanner"})}),": Use GitHub runner security scanners"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/activeAdminsSixMonths",children:"activeAdminsSixMonths"})}),": Require active admins in GitHub organization (activity in 6 months)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/activeWritersSixMonths",children:"activeWritersSixMonths"})}),": Require active members with write access (activity in 6 months)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/PRsBeforeMerge",children:"PRsBeforeMerge"})}),": Require pull requests before merging"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/commitSignoffForWeb",children:"commitSignoffForWeb"})}),": Enforce commit sign-off for web based commits"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/requireSignedCommits",children:"requireSignedCommits"})}),": Require signed commits"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/includePackageLock",children:"includePackageLock"})}),": Include package-lock.json in releases"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/requireTwoPartyReview",children:"requireTwoPartyReview"})}),": Require two-party review"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/requirePRApprovalForMainline",children:"requirePRApprovalForMainline"})}),": Require approved PRs for mainline commits"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/limitOrgOwners",children:"limitOrgOwners"})}),": Limit GitHub org owners to fewer than three"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/limitRepoAdmins",children:"limitRepoAdmins"})}),": Limit GitHub repo admins to fewer than three"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/patchExploitableHighVulns14Days",children:"patchExploitableHighVulns14Days"})}),": Patch critical/high vulnerabilities in 14 Days"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/patchExploitableNoncCriticalVulns60Days",children:"patchExploitableNoncCriticalVulns60Days"})}),": Patch non-critical vulnerabilities in 60 Days"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/githubOrgMFA",children:"githubOrgMFA"})}),": Enforce MFA in GitHub organization(s)"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/softwareDesignTraining",children:"softwareDesignTraining"})}),": Training on secure software design"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:(0,r.jsx)(s.a,{href:"/docs/checks/adminRepoCreationOnly",children:"adminRepoCreationOnly"})}),": Allow only admins to create public repositories"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>t});var i=n(6540);const r={},c=i.createContext(r);function o(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);