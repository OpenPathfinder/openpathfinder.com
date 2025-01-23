## OpenJS-SCGv1.0-solo-incubating Checklist
- **Author**: OpenJS Foundation
- **Title**: Security Compliance Guide v1.0 - Solo Maintainers incubating
- **Description**: This checklist is for projects that are in the incubating phase and have a solo maintainer.


| Priority | Check | details | Info |
| --- | --- | --- | --- |
| P0 | owaspTop10Training | Training on OWASP Top 10 or equivalent | [Doc](/docs/checks/owaspTop10Training) |
| P0 | softwareDesignTraining | Training on secure software design | [Doc](/docs/checks/softwareDesignTraining) |
| P1 | npmOrgMFA | Enforce MFA in npm organization(s) | [Doc](/docs/checks/npmOrgMFA) |
| P1 | orgToolingMFA | Enforce MFA in all the tools | [Doc](/docs/checks/orgToolingMFA) |
| P1 | MFAImpersonationDefense | Use MFA against impersonation | [Doc](/docs/checks/MFAImpersonationDefense) |
| P1 | githubOrgMFA | Enforce MFA in GitHub organization(s) | [Doc](/docs/checks/githubOrgMFA) |
| P2 | noSensitiveInfoInRepositories | Check sensitive information | [Doc](/docs/checks/noSensitiveInfoInRepositories) |
| P2 | injectedSecretsAtRuntime | Ensure that the secrets are injected at runtime | [Doc](/docs/checks/injectedSecretsAtRuntime) |
| P2 | scanCommitsForSensitiveInfo | Ensure that all the commits are scanned | [Doc](/docs/checks/scanCommitsForSensitiveInfo) |
| P2 | preventLandingSensitiveCommits | Block new commits with secrets or credentials | [Doc](/docs/checks/preventLandingSensitiveCommits) |
| P3 | SSHKeysRequired | Use SSH keys with passphrases for repository access | [Doc](/docs/checks/SSHKeysRequired) |
| P3 | npmPublicationMFA | Publish to npm using MFA-Enabled accounts | [Doc](/docs/checks/npmPublicationMFA) |
| P3 | githubWebhookSecrets | Secure GitHub Webhooks with secrets | [Doc](/docs/checks/githubWebhookSecrets) |
| P4 | restrictedOrgPermissions | Restrict default GitHub Org member permissions | [Doc](/docs/checks/restrictedOrgPermissions) |
| P4 | adminRepoCreationOnly | Allow only admins to create public repositories | [Doc](/docs/checks/adminRepoCreationOnly) |
| P4 | defineFunctionalRoles | Define roles aligned to functional responsibilities | [Doc](/docs/checks/defineFunctionalRoles) |
| P4 | githubWriteAccessRoles | Define teams/individuals with write access to repositories | [Doc](/docs/checks/githubWriteAccessRoles) |
| P5 | patchCriticalVulns30Days | Patch actively exploited critical vulnerabilities within 30 Days | [Doc](/docs/checks/patchCriticalVulns30Days) |
| P5 | patchNonCriticalVulns90Days | Patch non-critical vulnerabilities within 90 days | [Doc](/docs/checks/patchNonCriticalVulns90Days) |
| P6 | automateVulnDetection | Automate dependency vulnerability identification | [Doc](/docs/checks/automateVulnDetection) |
| P6 | staticCodeAnalysis | Use automated static code analysis tools | [Doc](/docs/checks/staticCodeAnalysis) |
| P6 | resolveLinterWarnings | Address compiler and linter warnings before merging | [Doc](/docs/checks/resolveLinterWarnings) |
| P6 | staticAppSecTesting | Use static application security testing for all commits | [Doc](/docs/checks/staticAppSecTesting) |
| P6 | commitStatusChecks | Require commit status checks to pass before merging | [Doc](/docs/checks/commitStatusChecks) |
| P7 | securityMdMeetsOpenJSCVD | Ensure Security.md meets OpenJS CVD guidelines | [Doc](/docs/checks/securityMdMeetsOpenJSCVD) |
| P7 | useCVDToolForVulns | Use CVD tools to manage vulnerability reports | [Doc](/docs/checks/useCVDToolForVulns) |
| P7 | vulnResponse14Days | Respond to external vulnerability reports in under 14 days | [Doc](/docs/checks/vulnResponse14Days) |
| P7 | incidentResponsePlan | Define clear communication and incident response plans | [Doc](/docs/checks/incidentResponsePlan) |
| P7 | assignCVEForKnownVulns | Assign CVEs to all known security vulnerabilities | [Doc](/docs/checks/assignCVEForKnownVulns) |
| P7 | includeCVEInReleaseNotes | Include CVE IDs in release notes for security fixes | [Doc](/docs/checks/includeCVEInReleaseNotes) |
| P8 | regressionTestsForVulns | Create regression tests for bugs and security vulnerabilities | [Doc](/docs/checks/regressionTestsForVulns) |
| P9 | defaultTokenPermissionsReadOnly | Set default GitHub workflow token permissions to read-only | [Doc](/docs/checks/defaultTokenPermissionsReadOnly) |
| P9 | blockWorkflowPRApproval | Prevent workflows from creating or approving PRs | [Doc](/docs/checks/blockWorkflowPRApproval) |
| P9 | noForcePushDefaultBranch | Disable force push on default branch | [Doc](/docs/checks/noForcePushDefaultBranch) |
| P9 | preventDeletionDefaultBranch | Prevent deletion of default branch | [Doc](/docs/checks/preventDeletionDefaultBranch) |
| P9 | upToDateDefaultBranchBeforeMerge | Require default branch updates before merging | [Doc](/docs/checks/upToDateDefaultBranchBeforeMerge) |
| P10 | restrictOrgSecrets | Restrict GitHub organization secrets to specific repositories | [Doc](/docs/checks/restrictOrgSecrets) |
| P10 | verifiedActionsOnly | Limit GitHub Actions to verified or trusted actions | [Doc](/docs/checks/verifiedActionsOnly) |
| P10 | noSelfHostedRunners | Disable self-hosted runners in GitHub organization | [Doc](/docs/checks/noSelfHostedRunners) |
| P11 | noArbitraryCodeInPipeline | Restrict build pipeline code execution to build scripts | [Doc](/docs/checks/noArbitraryCodeInPipeline) |
| P11 | limitWorkflowWritePermissions | Limit workflow write permissions to job level | [Doc](/docs/checks/limitWorkflowWritePermissions) |
| P11 | preventScriptInjection | Avoid script injection from untrusted variables | [Doc](/docs/checks/preventScriptInjection) |
| P12 | consistentBuildProcessDocs | Document consistent and automated build processes | [Doc](/docs/checks/consistentBuildProcessDocs) |
| P12 | upgradePathDocs | Support older versions or provide upgrade paths | [Doc](/docs/checks/upgradePathDocs) |
| P12 | ciAndCdPipelineAsCode | Automate CI/CD steps in code-based pipelines | [Doc](/docs/checks/ciAndCdPipelineAsCode) |
| P13 | pinActionsToSHA | Pin actions with secrets to full-length commit SHAs | [Doc](/docs/checks/pinActionsToSHA) |
| P14 | automateDependencyManagement | Automate monitoring of outdated dependencies | [Doc](/docs/checks/automateDependencyManagement) |
| P14 | machineReadableDependencies | Provide machine-readable dependency lists | [Doc](/docs/checks/machineReadableDependencies) |
| P14 | identifyModifiedDependencies | Uniquely identify modified dependencies | [Doc](/docs/checks/identifyModifiedDependencies) |
| P14 | annualDependencyRefresh | Refresh dependencies with annual releases | [Doc](/docs/checks/annualDependencyRefresh) |
| R1 | useHwKeyGithubAccess | Use AAL2/3 passkeys for GitHub access | [Doc](/docs/checks/useHwKeyGithubAccess) |
| R1 | useHwKeyGithubNonInteractive | Use AAL2/3 passkeys for non-interactive GitHub access | [Doc](/docs/checks/useHwKeyGithubNonInteractive) |
| R1 | useHwKeyOtherContexts | Use AAL2/3 passkeys in all other contexts | [Doc](/docs/checks/useHwKeyOtherContexts) |
| R2 | forkWorkflowApproval | Require approval for forked workflow changes | [Doc](/docs/checks/forkWorkflowApproval) |
| R2 | workflowSecurityScanner | Use workflow security scanners | [Doc](/docs/checks/workflowSecurityScanner) |
| R2 | runnerSecurityScanner | Use GitHub runner security scanners | [Doc](/docs/checks/runnerSecurityScanner) |
| R3 | activeAdminsSixMonths | Require active admins in GitHub organization (activity in 6 months) | [Doc](/docs/checks/activeAdminsSixMonths) |
| R3 | activeWritersSixMonths | Require active members with write access (activity in 6 months) | [Doc](/docs/checks/activeWritersSixMonths) |
| R4 | PRsBeforeMerge | Require pull requests before merging | [Doc](/docs/checks/PRsBeforeMerge) |
| R4 | commitSignoffForWeb | Enforce commit sign-off for web based commits | [Doc](/docs/checks/commitSignoffForWeb) |
| R4 | requireSignedCommits | Require signed commits | [Doc](/docs/checks/requireSignedCommits) |
| R5 | includePackageLock | Include package-lock.json in releases | [Doc](/docs/checks/includePackageLock) |
| R6 | requireCodeOwnersReviewForLargeTeams | Require code owners review | [Doc](/docs/checks/requireCodeOwnersReviewForLargeTeams) |
| R7 | limitOrgOwners | Limit GitHub org owners to fewer than three | [Doc](/docs/checks/limitOrgOwners) |
| R7 | limitRepoAdmins | Limit GitHub repo admins to fewer than three | [Doc](/docs/checks/limitRepoAdmins) |
| R8 | patchExploitableHighVulns14Days | Patch critical/high vulnerabilities in 14 Days | [Doc](/docs/checks/patchExploitableHighVulns14Days) |
| R8 | patchExploitableNoncCriticalVulns60Days | Patch non-critical vulnerabilities in 60 Days | [Doc](/docs/checks/patchExploitableNoncCriticalVulns60Days) |
    