---
sidebar_position: 4
title: History
slug: /history
---

# History of OpenPathfinder

At OpenPathfinder, we believe that open source collaboration drives innovation and empowers communities to build sustainable solutions. Here’s how our journey began and evolved over time.

---

OpenPathfinder emerged from a collective commitment to enhance the management and security of open source projects. It began as an initiative within the OpenJS Foundation's [Security Collaboration Space](https://github.com/openjs-foundation/security-collab-space), a forum dedicated to governing the security progress of JavaScript ecosystem projects.

Initially, the team envisioned a "dashboard"—a dynamic tool to visualize the progress of projects adhering to the principles of the ["OpenJS Foundation Security Compliance Guide v1.0"](https://docs.google.com/document/d/1tvJYtptFXqvS4863dhPwoVmFT5Jwr_WZLralrnulCZs/edit?tab=t.0#heading=h.2waouzm4ry8i). This guide served as a foundation for security compliance best practices, emphasizing the importance of equipping maintainers with tools to address complex security requirements effectively.

However, the team soon realized the potential to create a solution that transcended the limitations of a single ecosystem. This broadened the project’s scope into a platform capable of supporting diverse stacks and standards. The vision expanded from security compliance to improving the overall operational health of open source projects. Thus, OpenPathfinder was born—a universal solution designed to empower maintainers and foster sustainable project growth.

A key principle in OpenPathfinder's design is ensuring **security and autonomy**. Both **VisionBoard** and **fortSphere**, the core tools of the platform, are self-hosted. This approach guarantees data security and provides maintainers with full control over their workflows and tools, eliminating reliance on third-party hosting and mitigating associated vulnerabilities.

### Core Objectives of OpenPathfinder Tools:
- Automate compliance with security and operational standards.
- Deliver actionable insights for enhancing project health.
- Enable seamless policy management across distributed repositories.

Built by maintainers for maintainers, OpenPathfinder embodies the spirit of collaboration, turning ambitious ideas into practical solutions that empower open source teams to thrive.

---

## Milestones

### 1. Initiate Development of Security Program Standards for OpenJS Projects (Feb 2024)

In February 2024, [the OpenJS Foundation's Security Collaboration Space](https://github.com/openjs-foundation/security-collab-space) embarked on an ambitious initiative to [Develop Security Program Standards for OpenJS Projects](https://github.com/openjs-foundation/security-collab-space/issues/150). This project aimed to establish a comprehensive framework of security checks and guidelines to strengthen the security posture of OpenJS projects.

Contributors conducted detailed analyses of existing standards and frameworks, ensuring the final program would address diverse maintainer needs while remaining actionable and effective. This collaborative effort resulted in a robust foundation for OpenPathfinder’s future tools and solutions.

Key documents and discussions that shaped this initiative include:
- [Priority Group Index Page Options](https://hackmd.io/@rudd/H14K8eUuR): Explored ways to organize and prioritize security checks for accessibility.
- [Categories Index Options](https://hackmd.io/@rudd/BkUM3WU_R): Focused on categorizing security standards for easier understanding and implementation.
- [Priority Group Details Page Options](https://hackmd.io/@rudd/SyBtnZL_C): Discussed detailed layouts for presenting checks and recommendations.

This milestone established a foundation for building adaptable security frameworks, paving the way for OpenPathfinder’s comprehensive solutions.

---

### 2. Publish Draft of OpenJS Security Compliance Guide v1.0 (June 2024)

By June 2024, the OpenJS Foundation achieved a significant milestone: the publication of the draft for the **OpenJS Security Compliance Guide v1.0**. This guide offered detailed insights and tools to help maintainers align their projects with best practices in security compliance.

The draft included two key components:
1. **A comprehensive checklist spreadsheet** outlining actionable security checks and requirements for maintainers.
2. **A detailed guide** explaining how to apply these checks effectively to improve project security and operational health.

Key resources from this milestone:
- [Issue #211 in Security Collaboration Space](https://github.com/openjs-foundation/security-collab-space/issues/211): Documented the progress and iterations of the compliance guide.
- [Intro and Review of Standards](https://docs.google.com/document/d/1tvJYtptFXqvS4863dhPwoVmFT5Jwr_WZLralrnulCZs/edit): A foundational document summarizing the goals and framework of the compliance guide.
- [Standards Checklist Spreadsheet](https://docs.google.com/spreadsheets/d/1GwIsAudAn89xv9DAbr1HUaY4KEVBsYfg--_1cW0uIB0/edit#gid=0): Detailed the list of checks maintainers could follow for compliance.

#### Highlight: Interactive Introduction to the Compliance Guide

<div className="iframe-container">
    <iframe 
        src="https://www.youtube.com/embed/ZjmpNIYpvnc" 
        title="Overview of OpenJS Security Compliance Guide v1.0" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>


This milestone marked a turning point, providing maintainers with actionable tools and a roadmap to navigate complex security landscapes effectively. The feedback and testing phases that followed refined the guide, ensuring its practical application across diverse open source projects.

---

### 3. Website Launch (July 2024)

While the original documents served as a strong foundation for discussion and feedback, they posed challenges for maintainers. The format required high familiarity with the compliance guide and was difficult to operationalize. To address these challenges, the team decided to build a website using **Docusaurus** to centralize and better organize the information for maintainers.

The website grouped all the compliance information in an intuitive and accessible way, making it easier for maintainers to navigate and implement the guidelines. During this stage, the team synchronized updates with the original documents, incorporating community feedback in real-time.


<div className="iframe-container">
    <iframe 
        src="https://www.youtube.com/embed/GUqsDqZMEec?si=G2PCVsqW5LLL6emc&amp;start=2471" 
        title="Overview of OpenJS Security Compliance Guide v1.0" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>



The website was deployed on Netlify and is available at: [OpenJS Security Program Standards](https://openjs-security-program-standards.netlify.app/).

This launch was a pivotal moment, transforming the compliance guide from a static resource into an interactive and dynamic tool that maintainers could easily use and refer to in their workflows.

---

### 4. The "Dashboard" POC (November 2024)

In the last quarter of 2024, thanks to support from [Alpha-Omega](https://alpha-omega.dev/), the team initiated the development of the "Dashboard" Proof of Concept (POC)—a long-discussed idea from earlier in the year. The goal was to build a basic POC within a few days to demonstrate how maintainers could efficiently analyze, understand, and address security issues.

The POC leveraged local file storage, a CLI interface, and basic reporting and alert mechanisms using Markdown/JSON formats. It served as a proof of value, showing how this project could positively impact maintainers' daily workflows by streamlining security issue management.

### Key Achievements:
- Successfully integrated external sources such as the GitHub API and the OSSF Scorecard.
- Analyzed data against predefined compliance checks from the guide.
- Showcased project progression using simple but effective visualizations.

#### Highlight: Full Demo of the Dashboard

<div className="iframe-container">
    <iframe 
        src="https://www.youtube.com/embed/B1kd8k5SvBI" 
        title="Dashboard Proof of Concept Demo" 
        frameborder="0" 
        allowfullscreen>
    </iframe>
</div>


Key Resources:
- **Slides**: [Presentation](https://slides.ulisesgascon.com/openjs-security-program-standards)
- **Code Repository**: [GitHub POC Code](https://github.com/UlisesGascon/poc-openjs-security-program-standards-dashboard)

This milestone demonstrated the potential impact of the dashboard in simplifying security workflows, inspiring further iterations and community collaboration.

---

### 5. OpenPathfinder and VisionBoard (December 2024)

Following the success of the Dashboard POC, the team decided to formalize and expand its efforts. This led to the development of **[VisionBoard](/docs/visionBoard)**, the flagship tool under the broader [OpenPathfinder](https://openpathfinder.com/) initiative. [VisionBoard](/docs/visionBoard) aims to support maintainers with:
- Comprehensive compliance monitoring for multiple security guidelines or checklists.
- An extensible architecture for integration with various ecosystems and tools.
- Enhanced user interfaces designed for maintainers of all experience levels.

To establish [OpenPathfinder](https://openpathfinder.com/) as an independent and scalable initiative, the team secured branding assets, including logos and domain names, while organizing the first contributors' meeting. This marked the beginning of VisionBoard's transition into a community-driven platform.

Key Resources:
- **Slides**: (Coming Soon)
- **Recording**: (Coming Soon)

---

### 6. fortSphere (December 2024)

While [VisionBoard](/docs/visionBoard) excelled at providing insights into compliance, the team identified a critical gap: simplifying and accelerating the mitigation of security issues. To address this, they developed **[fortSphere](/docs/fortSphere)**, a CLI tool designed to:
- Apply security policies at the organization or repository level on GitHub.
- Streamline changes that typically require significant time and manual effort.
- Reduce the Time to Mitigation (TTM), especially for maintainers managing hundreds of repositories.

[fortSphere](/docs/fortSphere) integrates seamlessly into existing workflows, making it an indispensable tool for maintainers aiming to achieve security compliance efficiently.

Key Features:
- Centralized policy management for GitHub.
- A library of predefined [policies](/docs/fortSphere/policies) tailored to common security needs.
- Secure local operations for enhanced control and privacy.


## Our Future

As OpenPathfinder evolves, we remain committed to:
- Expanding our toolset with new features and integrations.
- Engaging the open source community to drive innovation.
- Building a more secure and collaborative ecosystem for maintainers and developers.

We invite you to join us on this journey. Whether you’re a contributor, a maintainer, or simply curious about our projects, OpenPathfinder welcomes you to help shape the future of open source.

---

Thank you for being part of our story!