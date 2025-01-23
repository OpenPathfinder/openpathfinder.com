## OpenJS-SCGv1.0-retiring Checklist
- **Author**: OpenJS Foundation
- **Title**: Security Compliance Guide v1.0 - Retiring
- **Description**: This checklist is for projects that are in the retiring phase and have multiple maintainers.


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
| P3 | SSHKeysRequired | Use SSH keys with passphrases for repository access | [Doc](/docs/checks/SSHKeysRequired) |
| P3 | npmPublicationMFA | Publish to npm using MFA-Enabled accounts | [Doc](/docs/checks/npmPublicationMFA) |
| P3 | githubWebhookSecrets | Secure GitHub Webhooks with secrets | [Doc](/docs/checks/githubWebhookSecrets) |
| P4 | restrictedOrgPermissions | Restrict default GitHub Org member permissions | [Doc](/docs/checks/restrictedOrgPermissions) |
| P4 | adminRepoCreationOnly | Allow only admins to create public repositories | [Doc](/docs/checks/adminRepoCreationOnly) |
| P4 | preventBranchProtectionBypass | Prevent admins from bypassing branch protection | [Doc](/docs/checks/preventBranchProtectionBypass) |
| P4 | defineFunctionalRoles | Define roles aligned to functional responsibilities | [Doc](/docs/checks/defineFunctionalRoles) |
| P4 | githubWriteAccessRoles | Define teams/individuals with write access to repositories | [Doc](/docs/checks/githubWriteAccessRoles) |
| P4 | twoOrMoreOwnersForAccess | Configure two or more owners for access continuity | [Doc](/docs/checks/twoOrMoreOwnersForAccess) |
| P6 | automateVulnDetection | Automate dependency vulnerability identification | [Doc](/docs/checks/automateVulnDetection) |
| P7 | securityMdMeetsOpenJSCVD | Ensure Security.md meets OpenJS CVD guidelines | [Doc](/docs/checks/securityMdMeetsOpenJSCVD) |
| P7 | useCVDToolForVulns | Use CVD tools to manage vulnerability reports | [Doc](/docs/checks/useCVDToolForVulns) |
| P7 | incidentResponsePlan | Define clear communication and incident response plans | [Doc](/docs/checks/incidentResponsePlan) |
| P7 | assignCVEForKnownVulns | Assign CVEs to all known security vulnerabilities | [Doc](/docs/checks/assignCVEForKnownVulns) |
| P7 | includeCVEInReleaseNotes | Include CVE IDs in release notes for security fixes | [Doc](/docs/checks/includeCVEInReleaseNotes) |
| P9 | blockWorkflowPRApproval | Prevent workflows from creating or approving PRs | [Doc](/docs/checks/blockWorkflowPRApproval) |
| P9 | noForcePushDefaultBranch | Disable force push on default branch | [Doc](/docs/checks/noForcePushDefaultBranch) |
| P9 | preventDeletionDefaultBranch | Prevent deletion of default branch | [Doc](/docs/checks/preventDeletionDefaultBranch) |
| P9 | upToDateDefaultBranchBeforeMerge | Require default branch updates before merging | [Doc](/docs/checks/upToDateDefaultBranchBeforeMerge) |
| P10 | noSelfHostedRunners | Disable self-hosted runners in GitHub organization | [Doc](/docs/checks/noSelfHostedRunners) |
| P11 | limitWorkflowWritePermissions | Limit workflow write permissions to job level | [Doc](/docs/checks/limitWorkflowWritePermissions) |
| P14 | automateDependencyManagement | Automate monitoring of outdated dependencies | [Doc](/docs/checks/automateDependencyManagement) |
| P14 | machineReadableDependencies | Provide machine-readable dependency lists | [Doc](/docs/checks/machineReadableDependencies) |
| P14 | identifyModifiedDependencies | Uniquely identify modified dependencies | [Doc](/docs/checks/identifyModifiedDependencies) |
| R1 | useHwKeyGithubAccess | Use AAL2/3 passkeys for GitHub access | [Doc](/docs/checks/useHwKeyGithubAccess) |
| R1 | useHwKeyGithubNonInteractive | Use AAL2/3 passkeys for non-interactive GitHub access | [Doc](/docs/checks/useHwKeyGithubNonInteractive) |
| R1 | useHwKeyOtherContexts | Use AAL2/3 passkeys in all other contexts | [Doc](/docs/checks/useHwKeyOtherContexts) |
| R2 | forkWorkflowApproval | Require approval for forked workflow changes | [Doc](/docs/checks/forkWorkflowApproval) |
| R2 | workflowSecurityScanner | Use workflow security scanners | [Doc](/docs/checks/workflowSecurityScanner) |
| R2 | runnerSecurityScanner | Use GitHub runner security scanners | [Doc](/docs/checks/runnerSecurityScanner) |
| R4 | PRsBeforeMerge | Require pull requests before merging | [Doc](/docs/checks/PRsBeforeMerge) |
| R4 | commitSignoffForWeb | Enforce commit sign-off for web based commits | [Doc](/docs/checks/commitSignoffForWeb) |
| R4 | requireSignedCommits | Require signed commits | [Doc](/docs/checks/requireSignedCommits) |
| R5 | includePackageLock | Include package-lock.json in releases | [Doc](/docs/checks/includePackageLock) |
| R6 | requirePRApprovalForMainline | Require approved PRs for mainline commits | [Doc](/docs/checks/requirePRApprovalForMainline) |
| R7 | limitOrgOwners | Limit GitHub org owners to fewer than three | [Doc](/docs/checks/limitOrgOwners) |
| R7 | limitRepoAdmins | Limit GitHub repo admins to fewer than three | [Doc](/docs/checks/limitRepoAdmins) |
    