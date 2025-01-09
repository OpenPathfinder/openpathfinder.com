---
sidebar_position: 6
title: Providers
slug: /visionBoard/providers
---

Providers are external data sources integrated into VisionBoard to collect and process information. Examples include the [GitHub API](#github-api) and [OSSF Scorecard](#ossf-scorecard). These providers operate through workflows that ensure data quality using JSON Schema before storing it in the database. For an in-depth understanding, refer to the [Architecture documentation](/docs/visionBoard/architecture).

## GitHub API

The [GitHub API](https://docs.github.com/en/rest?apiVersion=2022-11-28) is used solely for data queries. Ensure you configure your token correctly. For large organizations with hundreds of repositories, using dedicated tokens is recommended to avoid hitting quota limits. [Learn more about GitHub tokens](https://docs.github.com/en/rest/overview/resources-in-the-rest-api#rate-limiting).

Here are examples of workflows that use this provider:

- `visionboard workflow run --name update-github-orgs`: Fetches and updates detailed information about GitHub organizations.
- `visionboard workflow run --name upsert-github-repositories`: Finds and fetches details for all public repositories.

## OSSF Scorecard

The [OSSF Scorecard](https://scorecard.dev/) is included in VisionBoard for analyzing repository health and security. The analysis runs locally using [child processes](https://nodejs.org/api/child_process.html) and containers in parallel when executing the workflow: `visionboard workflow run --name upsert-ossf-scorecard`. Results are stored in the database for efficient access and fast queries via [reports](/docs/visionBoard/report-management).

![OSSF Scorecard Analysis table displaying repositories, commit hashes, analysis duration (in seconds), date, and scores for six OpenPathfinder repositories.](/img/visionBoard_project_report_detials_ossf_scorecard.png)
