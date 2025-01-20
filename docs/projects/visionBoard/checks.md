---
sidebar_position: 10
title: Checks
slug: /visionBoard/Checks
---


VisionBoard empowers organizations to streamline their security and compliance processes with a comprehensive collection of automated checks. These checks are designed to evaluate the health and security posture of your projects, ensuring alignment with industry standards.

While you can use checks individually, most users prefer to group them into [Checklists](/docs/visionBoard/checklists) tailored to specific standards or policies, such as OpenJS compliance frameworks. Checklists allow you to customize check priorities, adjust severity levels, and subscribe to specific compliance requirements for your projects.

Explore the full list of available checks below:

<!-- LIST:START -->
- **[owaspTop10Training](/docs/checks/owaspTop10Training)**: Training on OWASP Top 10 or equivalent 
- **[npmOrgMFA](/docs/checks/npmOrgMFA)**: Enforce MFA in npm organization(s) 
- **[orgToolingMFA](/docs/checks/orgToolingMFA)**: Enforce MFA in all the tools 
- **[MFAImpersonationDefense](/docs/checks/MFAImpersonationDefense)**: Use MFA against impersonation 
- **[noSensitiveInfoInRepositories](/docs/checks/noSensitiveInfoInRepositories)**: Check sensitive information 
- **[injectedSecretsAtRuntime](/docs/checks/injectedSecretsAtRuntime)**: Ensure that the secrets are injected at runtime 
- **[scanCommitsForSensitiveInfo](/docs/checks/scanCommitsForSensitiveInfo)**: Ensure that all the commits are scanned 
- **[preventLandingSensitiveCommits](/docs/checks/preventLandingSensitiveCommits)**: Block new commits with secrets or credentials 
- **[SSHKeysRequired](/docs/checks/SSHKeysRequired)**: Use SSH keys with passphrases for repository access 
- **[npmPublicationMFA](/docs/checks/npmPublicationMFA)**: Publish to npm using MFA-Enabled accounts 
- **[githubWebhookSecrets](/docs/checks/githubWebhookSecrets)**: Secure GitHub Webhooks with secrets 
- **[requireCodeOwnersReviewForLargeTeams](/docs/checks/requireCodeOwnersReviewForLargeTeams)**: Require code owners review 
- **[restrictedOrgPermissions](/docs/checks/restrictedOrgPermissions)**: Restrict default GitHub Org member permissions 
- **[preventBranchProtectionBypass](/docs/checks/preventBranchProtectionBypass)**: Prevent admins from bypassing branch protection 
- **[defineFunctionalRoles](/docs/checks/defineFunctionalRoles)**: Define roles aligned to functional responsibilities 
- **[githubWriteAccessRoles](/docs/checks/githubWriteAccessRoles)**: Define teams/individuals with write access to repositories 
- **[twoOrMoreOwnersForAccess](/docs/checks/twoOrMoreOwnersForAccess)**: Configure two or more owners for access continuity 
- **[patchCriticalVulns30Days](/docs/checks/patchCriticalVulns30Days)**: Patch actively exploited critical vulnerabilities within 30 Days 
- **[patchNonCriticalVulns90Days](/docs/checks/patchNonCriticalVulns90Days)**: Patch non-critical vulnerabilities within 90 days 
- **[automateVulnDetection](/docs/checks/automateVulnDetection)**: Automate dependency vulnerability identification 
- **[staticCodeAnalysis](/docs/checks/staticCodeAnalysis)**: Use automated static code analysis tools 
- **[resolveLinterWarnings](/docs/checks/resolveLinterWarnings)**: Address compiler and linter warnings before merging 
- **[staticAppSecTesting](/docs/checks/staticAppSecTesting)**: Use static application security testing for all commits 
- **[commitStatusChecks](/docs/checks/commitStatusChecks)**: Require commit status checks to pass before merging 
- **[securityMdMeetsOpenJSCVD](/docs/checks/securityMdMeetsOpenJSCVD)**: Ensure Security.md meets OpenJS CVD guidelines 
- **[useCVDToolForVulns](/docs/checks/useCVDToolForVulns)**: Use CVD tools to manage vulnerability reports 
- **[vulnResponse14Days](/docs/checks/vulnResponse14Days)**: Respond to external vulnerability reports in under 14 days 
- **[incidentResponsePlan](/docs/checks/incidentResponsePlan)**: Define clear communication and incident response plans 
- **[assignCVEForKnownVulns](/docs/checks/assignCVEForKnownVulns)**: Assign CVEs to all known security vulnerabilities 
- **[includeCVEInReleaseNotes](/docs/checks/includeCVEInReleaseNotes)**: Include CVE IDs in release notes for security fixes 
- **[regressionTestsForVulns](/docs/checks/regressionTestsForVulns)**: Create regression tests for bugs and security vulnerabilities 
- **[defaultTokenPermissionsReadOnly](/docs/checks/defaultTokenPermissionsReadOnly)**: Set default GitHub workflow token permissions to read-only 
- **[blockWorkflowPRApproval](/docs/checks/blockWorkflowPRApproval)**: Prevent workflows from creating or approving PRs 
- **[noForcePushDefaultBranch](/docs/checks/noForcePushDefaultBranch)**: Disable force push on default branch 
- **[preventDeletionDefaultBranch](/docs/checks/preventDeletionDefaultBranch)**: Prevent deletion of default branch 
- **[upToDateDefaultBranchBeforeMerge](/docs/checks/upToDateDefaultBranchBeforeMerge)**: Require default branch updates before merging 
- **[restrictOrgSecrets](/docs/checks/restrictOrgSecrets)**: Restrict GitHub organization secrets to specific repositories 
- **[verifiedActionsOnly](/docs/checks/verifiedActionsOnly)**: Limit GitHub Actions to verified or trusted actions 
- **[noSelfHostedRunners](/docs/checks/noSelfHostedRunners)**: Disable self-hosted runners in GitHub organization 
- **[noArbitraryCodeInPipeline](/docs/checks/noArbitraryCodeInPipeline)**: Restrict build pipeline code execution to build scripts 
- **[limitWorkflowWritePermissions](/docs/checks/limitWorkflowWritePermissions)**: Limit workflow write permissions to job level 
- **[preventScriptInjection](/docs/checks/preventScriptInjection)**: Avoid script injection from untrusted variables 
- **[consistentBuildProcessDocs](/docs/checks/consistentBuildProcessDocs)**: Document consistent and automated build processes 
- **[upgradePathDocs](/docs/checks/upgradePathDocs)**: Support older versions or provide upgrade paths 
- **[softwareArchitectureDocs](/docs/checks/softwareArchitectureDocs)**: Document software architecture 
- **[ciAndCdPipelineAsCode](/docs/checks/ciAndCdPipelineAsCode)**: Automate CI/CD steps in code-based pipelines 
- **[pinActionsToSHA](/docs/checks/pinActionsToSHA)**: Pin actions with secrets to full-length commit SHAs 
- **[automateDependencyManagement](/docs/checks/automateDependencyManagement)**: Automate monitoring of outdated dependencies 
- **[machineReadableDependencies](/docs/checks/machineReadableDependencies)**: Provide machine-readable dependency lists 
- **[identifyModifiedDependencies](/docs/checks/identifyModifiedDependencies)**: Uniquely identify modified dependencies 
- **[annualDependencyRefresh](/docs/checks/annualDependencyRefresh)**: Refresh dependencies with annual releases 
- **[useHwKeyGithubAccess](/docs/checks/useHwKeyGithubAccess)**: Use AAL2/3 passkeys for GitHub access 
- **[useHwKeyGithubNonInteractive](/docs/checks/useHwKeyGithubNonInteractive)**: Use AAL2/3 passkeys for non-interactive GitHub access 
- **[useHwKeyOtherContexts](/docs/checks/useHwKeyOtherContexts)**: Use AAL2/3 passkeys in all other contexts 
- **[forkWorkflowApproval](/docs/checks/forkWorkflowApproval)**: Require approval for forked workflow changes 
- **[workflowSecurityScanner](/docs/checks/workflowSecurityScanner)**: Use workflow security scanners 
- **[runnerSecurityScanner](/docs/checks/runnerSecurityScanner)**: Use GitHub runner security scanners 
- **[activeAdminsSixMonths](/docs/checks/activeAdminsSixMonths)**: Require active admins in GitHub organization (activity in 6 months) 
- **[activeWritersSixMonths](/docs/checks/activeWritersSixMonths)**: Require active members with write access (activity in 6 months) 
- **[PRsBeforeMerge](/docs/checks/PRsBeforeMerge)**: Require pull requests before merging 
- **[commitSignoffForWeb](/docs/checks/commitSignoffForWeb)**: Enforce commit sign-off for web based commits 
- **[requireSignedCommits](/docs/checks/requireSignedCommits)**: Require signed commits 
- **[includePackageLock](/docs/checks/includePackageLock)**: Include package-lock.json in releases 
- **[requireTwoPartyReview](/docs/checks/requireTwoPartyReview)**: Require two-party review 
- **[requirePRApprovalForMainline](/docs/checks/requirePRApprovalForMainline)**: Require approved PRs for mainline commits 
- **[limitOrgOwners](/docs/checks/limitOrgOwners)**: Limit GitHub org owners to fewer than three 
- **[limitRepoAdmins](/docs/checks/limitRepoAdmins)**: Limit GitHub repo admins to fewer than three 
- **[patchExploitableHighVulns14Days](/docs/checks/patchExploitableHighVulns14Days)**: Patch critical/high vulnerabilities in 14 Days 
- **[patchExploitableNoncCriticalVulns60Days](/docs/checks/patchExploitableNoncCriticalVulns60Days)**: Patch non-critical vulnerabilities in 60 Days 
- **[githubOrgMFA](/docs/checks/githubOrgMFA)**: Enforce MFA in GitHub organization(s) 
- **[softwareDesignTraining](/docs/checks/softwareDesignTraining)**: Training on secure software design 
- **[adminRepoCreationOnly](/docs/checks/adminRepoCreationOnly)**: Allow only admins to create public repositories 
<!-- LIST:END -->