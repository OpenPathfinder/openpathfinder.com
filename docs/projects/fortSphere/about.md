---
sidebar_position: 1
title: About
slug: /fortSphere
---



# fortSphere

Fortify your Digital Sphere, one command at a time

---

![fortSphere logo and tagline, 'Fortify your Digital Sphere, One Command at a Time](/img/fortSphere_header.png)


**fortSphere** is a community-driven, open source CLI tool crafted with love by maintainers for maintainers. It empowers you to secure and streamline your GitHub organizations and repositories, ensuring you’re always in control. Built with a secure-by-default philosophy, fortSphere guarantees that:
- **Your Tokens and Data Stay Local:** All operations are performed locally—your sensitive information never leaves your machine.
- **No Blind Trust Required:** As an open source project, you don’t need to trust others—just the transparent and collaborative efforts of its contributors.

---

## Key Features:

- **Centralized Policy Management:** Apply security and operational policies across all your GitHub organizations with one command.
- **Real-Time Checks and Updates:** Detect non-compliant configurations and resolve them automatically.
- **Customizable Policies:** Choose from a suite of predefined policies or create your own.


## Demo Walkthrough

In this demo we will check and enforce the policy "Restrict Repository Creation" also known as [restrictRepoCreationGitHub](/docs/policies/restrictRepoCreationGitHub)

### Scenario 1: Setup is Already Compliant (`restrictRepoCreationGitHub`)

In this scenario, fortSphere detects that the GitHub organization's setup is already compliant with the applied policy (`restrictRepoCreationGitHub`).

Here’s a step-by-step overview:


**GitHub UI**
![GitHub organization settings page showing member privileges and repository creation options before applying the compliance policy.](/img/github_ui_01.png)

**fortSphere run and logs**
![fortSphere command-line interface logs indicating that the organization is already compliant with the applied policy.](/img/fortSphere_logs_01.png)



**Outcome:** 

✅ No changes were necessary; the organization setup is already compliant.

---

### Scenario 2: Setup Requires Changes (`restrictRepoCreationGitHub`)

This scenario highlights how fortSphere identifies and corrects a misconfigured setup to enforce compliance.

**GitHub UI**
![GitHub organization settings page displaying member privileges and repository creation options requiring updates for compliance.](/img/github_ui_02.png)

**fortSphere run and logs**
![fortSphere command-line interface logs showing that changes were applied successfully to bring the organization into compliance](/img/fortSphere_logs_02.png)


**Outcome:** 

✅ The necessary changes were made, and the organization now complies with the applied policy.



---


## Why fortSphere?

- **Community-Driven Development:** Built by maintainers, for maintainers, with a focus on real-world needs and practical solutions.
- **Secure by Default:** fortSphere respects your privacy. Your tokens and data are processed locally, and nothing is shared externally.
- **Efficiency:** Save hours of manual configuration by automating repetitive security tasks.
- **Security:** Ensure that your repositories adhere to organizational policies and best practices.
- **Simplicity:** Fortify your digital environment with an easy-to-use CLI interface.