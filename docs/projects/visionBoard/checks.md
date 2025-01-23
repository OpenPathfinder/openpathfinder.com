---
sidebar_position: 10
title: Checks
slug: /visionBoard/Checks
---


VisionBoard empowers organizations to streamline their security and compliance processes with a comprehensive collection of automated checks. These checks are designed to evaluate the health and security posture of your projects, ensuring alignment with industry standards.

While you can use checks individually, most users prefer to group them into [Checklists](/docs/visionBoard/checklists) tailored to specific standards or policies, such as OpenJS compliance frameworks. Checklists allow you to customize check priorities, adjust severity levels, and subscribe to specific compliance requirements for your projects.

Explore the full list of available checks below:

<!-- LIST:START -->
- **[useHwKeyGithubAccess](/docs/checks/useHwKeyGithubAccess)**: Use AAL2/3 passkeys for GitHub access 
- **[vulnResponse14Days](/docs/checks/vulnResponse14Days)**: Respond to external vulnerability reports in under 14 days 
- **[patchExploitableHighVulns14Days](/docs/checks/patchExploitableHighVulns14Days)**: Patch critical/high vulnerabilities in 14 Days 
- **[requirePRApprovalForMainline](/docs/checks/requirePRApprovalForMainline)**: Require approved PRs for mainline commits 
- **[npmOrgMFA](/docs/checks/npmOrgMFA)**: Enforce MFA in npm organization(s) 
- **[defaultTokenPermissionsReadOnly](/docs/checks/defaultTokenPermissionsReadOnly)**: Set default GitHub workflow token permissions to read-only 
- **[machineReadableDependencies](/docs/checks/machineReadableDependencies)**: Provide machine-readable dependency lists 
- **[limitRepoAdmins](/docs/checks/limitRepoAdmins)**: Limit GitHub repo admins to fewer than three 
- **[identifyModifiedDependencies](/docs/checks/identifyModifiedDependencies)**: Uniquely identify modified dependencies 
- **[requireCodeOwnersReviewForLargeTeams](/docs/checks/requireCodeOwnersReviewForLargeTeams)**: Require code owners review 
- **[commitSignoffForWeb](/docs/checks/commitSignoffForWeb)**: Enforce commit sign-off for web based commits 
- **[preventLandingSensitiveCommits](/docs/checks/preventLandingSensitiveCommits)**: Block new commits with secrets or credentials 
- **[blockWorkflowPRApproval](/docs/checks/blockWorkflowPRApproval)**: Prevent workflows from creating or approving PRs 
- **[consistentBuildProcessDocs](/docs/checks/consistentBuildProcessDocs)**: Document consistent and automated build processes 
- **[MFAImpersonationDefense](/docs/checks/MFAImpersonationDefense)**: Use MFA against impersonation 
- **[restrictOrgSecrets](/docs/checks/restrictOrgSecrets)**: Restrict GitHub organization secrets to specific repositories 
- **[limitOrgOwners](/docs/checks/limitOrgOwners)**: Limit GitHub org owners to fewer than three 
- **[noForcePushDefaultBranch](/docs/checks/noForcePushDefaultBranch)**: Disable force push on default branch 
- **[assignCVEForKnownVulns](/docs/checks/assignCVEForKnownVulns)**: Assign CVEs to all known security vulnerabilities 
- **[automateDependencyManagement](/docs/checks/automateDependencyManagement)**: Automate monitoring of outdated dependencies 
- **[activeAdminsSixMonths](/docs/checks/activeAdminsSixMonths)**: Require active admins in GitHub organization (activity in 6 months) 
- **[restrictedOrgPermissions](/docs/checks/restrictedOrgPermissions)**: Restrict default GitHub Org member permissions 
- **[requireTwoPartyReview](/docs/checks/requireTwoPartyReview)**: Require two-party review 
- **[automateVulnDetection](/docs/checks/automateVulnDetection)**: Automate dependency vulnerability identification 
- **[runnerSecurityScanner](/docs/checks/runnerSecurityScanner)**: Use GitHub runner security scanners 
- **[githubWebhookSecrets](/docs/checks/githubWebhookSecrets)**: Secure GitHub Webhooks with secrets 
- **[includePackageLock](/docs/checks/includePackageLock)**: Include package-lock.json in releases 
- **[owaspTop10Training](/docs/checks/owaspTop10Training)**: Training on OWASP Top 10 or equivalent 
- **[preventBranchProtectionBypass](/docs/checks/preventBranchProtectionBypass)**: Prevent admins from bypassing branch protection 
- **[PRsBeforeMerge](/docs/checks/PRsBeforeMerge)**: Require pull requests before merging 
- **[preventScriptInjection](/docs/checks/preventScriptInjection)**: Avoid script injection from untrusted variables 
- **[SSHKeysRequired](/docs/checks/SSHKeysRequired)**: Use SSH keys with passphrases for repository access 
- **[noArbitraryCodeInPipeline](/docs/checks/noArbitraryCodeInPipeline)**: Restrict build pipeline code execution to build scripts 
- **[noSelfHostedRunners](/docs/checks/noSelfHostedRunners)**: Disable self-hosted runners in GitHub organization 
- **[upgradePathDocs](/docs/checks/upgradePathDocs)**: Support older versions or provide upgrade paths 
- **[verifiedActionsOnly](/docs/checks/verifiedActionsOnly)**: Limit GitHub Actions to verified or trusted actions 
- **[limitWorkflowWritePermissions](/docs/checks/limitWorkflowWritePermissions)**: Limit workflow write permissions to job level 
- **[annualDependencyRefresh](/docs/checks/annualDependencyRefresh)**: Refresh dependencies with annual releases 
- **[includeCVEInReleaseNotes](/docs/checks/includeCVEInReleaseNotes)**: Include CVE IDs in release notes for security fixes 
- **[scanCommitsForSensitiveInfo](/docs/checks/scanCommitsForSensitiveInfo)**: Ensure that all the commits are scanned 
- **[noSensitiveInfoInRepositories](/docs/checks/noSensitiveInfoInRepositories)**: Check sensitive information 
- **[upToDateDefaultBranchBeforeMerge](/docs/checks/upToDateDefaultBranchBeforeMerge)**: Require default branch updates before merging 
- **[adminRepoCreationOnly](/docs/checks/adminRepoCreationOnly)**: Allow only admins to create public repositories 
- **[ciAndCdPipelineAsCode](/docs/checks/ciAndCdPipelineAsCode)**: Automate CI/CD steps in code-based pipelines 
- **[commitStatusChecks](/docs/checks/commitStatusChecks)**: Require commit status checks to pass before merging 
- **[npmPublicationMFA](/docs/checks/npmPublicationMFA)**: Publish to npm using MFA-Enabled accounts 
- **[patchExploitableNoncCriticalVulns60Days](/docs/checks/patchExploitableNoncCriticalVulns60Days)**: Patch non-critical vulnerabilities in 60 Days 
- **[forkWorkflowApproval](/docs/checks/forkWorkflowApproval)**: Require approval for forked workflow changes 
- **[resolveLinterWarnings](/docs/checks/resolveLinterWarnings)**: Address compiler and linter warnings before merging 
- **[activeWritersSixMonths](/docs/checks/activeWritersSixMonths)**: Require active members with write access (activity in 6 months) 
- **[twoOrMoreOwnersForAccess](/docs/checks/twoOrMoreOwnersForAccess)**: Configure two or more owners for access continuity 
- **[staticAppSecTesting](/docs/checks/staticAppSecTesting)**: Use static application security testing for all commits 
- **[incidentResponsePlan](/docs/checks/incidentResponsePlan)**: Define clear communication and incident response plans 
- **[patchNonCriticalVulns90Days](/docs/checks/patchNonCriticalVulns90Days)**: Patch non-critical vulnerabilities within 90 days 
- **[pinActionsToSHA](/docs/checks/pinActionsToSHA)**: Pin actions with secrets to full-length commit SHAs 
- **[softwareArchitectureDocs](/docs/checks/softwareArchitectureDocs)**: Document software architecture 
- **[githubOrgMFA](/docs/checks/githubOrgMFA)**: Enforce MFA in GitHub organization(s) 
- **[defineFunctionalRoles](/docs/checks/defineFunctionalRoles)**: Define roles aligned to functional responsibilities 
- **[preventDeletionDefaultBranch](/docs/checks/preventDeletionDefaultBranch)**: Prevent deletion of default branch 
- **[useCVDToolForVulns](/docs/checks/useCVDToolForVulns)**: Use CVD tools to manage vulnerability reports 
- **[patchCriticalVulns30Days](/docs/checks/patchCriticalVulns30Days)**: Patch actively exploited critical vulnerabilities within 30 Days 
- **[regressionTestsForVulns](/docs/checks/regressionTestsForVulns)**: Create regression tests for bugs and security vulnerabilities 
- **[softwareDesignTraining](/docs/checks/softwareDesignTraining)**: Training on secure software design 
- **[orgToolingMFA](/docs/checks/orgToolingMFA)**: Enforce MFA in all the tools 
- **[githubWriteAccessRoles](/docs/checks/githubWriteAccessRoles)**: Define teams/individuals with write access to repositories 
- **[requireSignedCommits](/docs/checks/requireSignedCommits)**: Require signed commits 
- **[useHwKeyGithubNonInteractive](/docs/checks/useHwKeyGithubNonInteractive)**: Use AAL2/3 passkeys for non-interactive GitHub access 
- **[securityMdMeetsOpenJSCVD](/docs/checks/securityMdMeetsOpenJSCVD)**: Ensure Security.md meets OpenJS CVD guidelines 
- **[staticCodeAnalysis](/docs/checks/staticCodeAnalysis)**: Use automated static code analysis tools 
- **[useHwKeyOtherContexts](/docs/checks/useHwKeyOtherContexts)**: Use AAL2/3 passkeys in all other contexts 
- **[workflowSecurityScanner](/docs/checks/workflowSecurityScanner)**: Use workflow security scanners 
- **[injectedSecretsAtRuntime](/docs/checks/injectedSecretsAtRuntime)**: Ensure that the secrets are injected at runtime 
<!-- LIST:END -->