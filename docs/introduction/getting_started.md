---
sidebar_position: 1
title: Getting Started
slug: /getting-started
---

# Getting Started

Welcome to **OpenPathfinder**, a collaborative open source initiative that empowers developers and organizations to secure, monitor, and manage their projects efficiently. This guide introduces you to our two flagship tools, **VisionBoard** and **fortSphere**, and helps you begin your journey with OpenPathfinder.

---

![OpenPathfinder logo in header format](/img/openPathfinder_header.png)

## What Is OpenPathfinder?

OpenPathfinder is committed to building tools that:
- Simplify compliance with security and operational standards.
- Automate repetitive tasks, freeing up time for maintaining projects.
- Provide actionable insights to maintain project health.

Our current projects:
- **[VisionBoard](#visionboard)**: A dashboard for data-driven compliance and project monitoring.
- **[fortSphere](#fortsphere)**: A CLI tool for secure policy management across GitHub organizations.

---

![visionBoard logo in header format](/img/visionBoard_header.png)

## VisionBoard

VisionBoard helps organizations transform raw data into actionable insights. [Created to support OpenJS Foundation projects](/docs/history), it simplifies the complex task of monitoring security and operational health.

### Key Features:
- **Customizable [Checks](/docs/visionBoard/Checks) and [Checklists](/docs/visionBoard/checklists)**: Automates compliance with security standards, such as the [OpenJS Security Compliance Guide](/docs/visionBoard/checklists#official-checklists).
- **Integration with Tools**: Connects to GitHub APIs, OSSF Scorecard, and other external sources to enrich and analyze data.
- **Intuitive Dashboards**: Offers visual insights into the state of your projects.

VisionBoard is the go-to tool for organizations aiming to maintain compliance and ensure best practices across their repositories. Explore more on the [VisionBoard page](/docs/visionBoard).

---

![fortSphere logo in header format](/img/fortSphere_header.png)

## fortSphere

fortSphere is a CLI tool that simplifies managing policies for GitHub organizations and repositories. Designed by maintainers, for maintainers, it ensures efficiency and security without compromising user control.

### Key Features:
- **Local Processing**: All operations are executed locally—your sensitive data never leaves your machine.
- **Policy Management**: Detects and resolves non-compliant configurations with predefined or custom [policies](/docs/fortSphere/policies).
- **Real-Time Updates**: Provides instant feedback and remediation to secure your repositories.

---

## Why Use OpenPathfinder?

By combining VisionBoard and fortSphere, OpenPathfinder offers:
- **Comprehensive Solutions**: Address both compliance monitoring and secure policy enforcement.
- **Flexibility**: Use these tools independently or as part of an integrated workflow.
- **Community Focus**: Built collaboratively with a focus on practical needs.

---

## Get Started

1. **Learn More**:
   - Dive into the [VisionBoard Overview](/docs/visionBoard) or [fortSphere Overview](/docs/fortSphere).

2. **Join the Community**:
   - Participate in discussions, explore issues, and contribute on [GitHub](https://github.com/OpenPathfinder).

3. **Run Locally**:
   If you prefer to start exploring the tools locally, use the following `docker-compose.yml` file:

   ```yml
   # soon
   ```

### Commands
- **Start the services**:
  ```bash
  docker compose up
  ```

- **Stop and remove the services**:
  ```bash
  docker compose down
  ```

This setup allows you to explore VisionBoard’s dashboard and fortSphere’s CLI in a local environment.

---

Thank you for choosing OpenPathfinder. Together, we’re fortifying the future of open source development!
