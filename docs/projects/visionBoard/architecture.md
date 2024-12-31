---
sidebar_position: 5
title: Architecture
slug: /visionBoard/architecture
---

This project is part of the [openPathfinder](https://github.com/OpenPathfinder) initiative, playing a key role in data collection and analysis. This document outlines the architecture of visionBoard in detail.

## Context

![A flowchart with "Database" (yellow) bidirectionally connected to "visionBoard" (green), which sends data to "Website" (blue) via a one-way arrow.](/img/projects.svg)

The [visionBoard](https://github.com/OpenPathfinder/visionBoard) project is designed to collect data from external sources, generate intelligence, and store information in a PostgreSQL database. Checks are run against the database to assess the health of projects.

The collected data powers other projects, such as [this website](https://github.com/OpenPathfinder/openpathfinder.com), which presents compliance checks and reports. For integration details, see [this pipeline](https://github.com/OpenPathfinder/openpathfinder.com/blob/main/.github/workflows/sync_data.yml#L41).

## Entities

![A flowchart showing "Projects" (blue) connected to "GitHub Organizations" (green), which links to "GitHub Repositories" (yellow) in both directions.](/img/entities.svg)

VisionBoard was [initially developed as "the dashboard" for the OpenJS Foundation](/docs/history), following their entity structure. Projects can span multiple GitHub Organizations, each containing several repositories.

Enrichment is performed on repositories and organizations, while checks are executed at the project level and across other tables.

### Database Schemas

The SQL schema is available at [src/database/schema/schema.sql](https://github.com/OpenPathfinder/visionBoard/blob/main/src/database/schema/schema.sql). You can use external tools to visualize the database structure.

## Internal Parts

### Diagram

![A flowchart showing "Database," "CLI," "artifacts," and external inputs connecting to "visionBoard Workflows" (Providers, Importers, Reporting, Checks, Scripts), with outputs to "Website" via GitHub Actions.](/img/visionBoard_architecture.svg)

The CLI is the primary interface for interacting with visionBoard, supporting scripts via npm. Information is stored and retrieved from the database. Components like providers, importers, reporting, checks, and scripts operate in isolation for better testing and reusability.

### Components

#### CLI

The CLI organizes actions into workflows and checks. Workflows automate steps like fetching data and updating the database. CLI commands and workflows are defined in [src/cli](https://github.com/OpenPathfinder/visionBoard/blob/main/src/cli) and [src/workflows](https://github.com/OpenPathfinder/visionBoard/blob/main/src/workflows). See [Usage](/docs/visionBoard/usage) for general usage instructions.

#### Providers

Providers are external data sources, such as the GitHub API. Providers retrieve data on repositories, organizations, and branches via HTTP APIs or containers (e.g., OSSF Scorecard). Data validation is performed before storage. See [src/providers](https://github.com/OpenPathfinder/visionBoard/blob/main/src/providers).

#### Importers

Importers bulk upsert curated project data. Data is JSON-validated using schemas in [src/schemas](https://github.com/OpenPathfinder/visionBoard/blob/main/src/schemas). Development details are in [this issue](https://github.com/OpenPathfinder/visionBoard/issues/56).

#### Scripts

Scripts, defined in [scripts](https://github.com/OpenPathfinder/visionBoard/tree/main/scripts), support integrations and query preparation. Future expansions will enhance developer experience (DevEx).

#### Checks

Checks analyze database information to evaluate project health (e.g., branch protection status). Key principles:

- **Fast**: Use only database information, avoiding external queries or containers.
- **Isolated**: No interdependencies between checks.
- **Repeatable**: Consistent results for the same input.
- **Self-validating**: No manual interaction required.
- **Immutable**: Same input always produces the same output.

For more details, see the [Checks Guide](/docs/visionBoard/Checks).

#### Reporting

Reports summarize check results, offering actionable insights like compliance status. Formats include JSON, Markdown, and HTML. For ongoing initiatives, see [this milestone](https://github.com/OpenPathfinder/visionBoard/milestone/4).

For more details, see the [Report Management Documentation](/docs/visionBoard/report-management).


#### Database

The PostgreSQL database structure supports querying and data enrichment. Management instructions are in [Database Management Documentation](/docs/visionBoard/database-management). The [src/store](https://github.com/OpenPathfinder/visionBoard/blob/main/src/store) contains database query methods.

Testing resources include [__fixtures__](https://github.com/OpenPathfinder/visionBoard/blob/main/__fixtures__) and [__utils__](https://github.com/OpenPathfinder/visionBoard/blob/main/__utils__).


#### Artifacts

Artifacts, such as JSON, Markdown, and HTML files, are generated for consumption by other tools and stored in the `output` directory (Git-ignored). VisionBoard focuses on artifact generation rather than presentation.
