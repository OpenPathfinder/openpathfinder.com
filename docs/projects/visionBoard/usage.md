---
sidebar_position: 4
title: Usage
slug: /visionBoard/usage
---

## CLI Commands

Every command in `visionBoard` comes with its own detailed help documentation. Use the `help` command to get more information about specific commands and their options. For example:

- General help:
  ```bash
  visionBoard help
  ```

- Command-specific help:
  ```bash
  visionBoard workflow help
  ```

### Version

Display the current version of visionBoard. Use this command to verify your installation and ensure compatibility:

```bash
visionBoard version
```

### Projects

The `visionBoard project` command allows you to add and manage projects linked to `visionBoard`. In the [architecture documentation](/docs/visionBoard/architecture) you can get a better idea of how the entities are related (project, organization, repository, etc...) 

#### Add a New Project

Use this command to add a project with one or multiple GitHub organizations associated to the visionBoard:

```bash
visionBoard project add [--name <name>] [--github-urls <urls...>]
```

- **`--name <name>`**: The name you want to assign to this project.
- **`--github-urls <urls...>`**: One or more GitHub organization URL(s) associated with the project.

**Example**:

```bash
visionBoard project add --name express --github-urls https://github.com/expressjs https://github.com/pillarjs https://github.com/jshttp
```

This command adds a project named `express` and associates it with three GitHub organizations.

For more details about project configuration, see the [architecture documentation](/docs/visionBoard/architecture).

### Workflows

Workflows in `visionBoard` automate sequences of tasks or checks. Use the following commands to manage workflows:

#### Run a Workflow

Execute a specific workflow by name:

```bash
visionBoard workflow run [--name <name>]
```

**Example**:

```bash
visionBoard workflow run --name run-all-checks
```

#### List Available Workflows

Display all available workflows:

```bash
visionBoard workflow list
```

### Checks

Checks are individual tasks or validations performed by `visionBoard`. Use the following commands to manage checks:

#### List All Available Checks

Display a list of all available checks:

```bash
visionBoard check list
```

For more details about checks available, see the [Checks documentation](/docs/visionBoard/Checks).

#### Run a Specific Check

Execute a specific check by name:

```bash
visionBoard check run [--name <name>]
```

#### Run All Checks Sequentially

Run all checks in sequence using a predefined workflow:

```bash
visionBoard workflow run run-all-checks
```

For more details about checks, see [Checks Guide](/docs/visionBoard/Checks).

### Checklists

Checklists are collections of checks grouped for convenience. Use these commands to manage and execute checklists:

#### List Available Checklists

Display all available checklists:

```bash
visionBoard checklist list
```

#### Run a Specific Checklist

Execute a specific checklist by name:

```bash
visionBoard checklist run [--name <name>]
```

#### Run a Checklist with a Defined Project Scope

Run a checklist while limiting its scope to specific projects:

```bash
visionBoard checklist run [--name <name>] [--project-scope <name1,name2,...>]
```

**Example**:

```bash
visionBoard checklist run --name OpenJS-SCGv1.0-active --project-scope express
```

For more details about checklists, see [Checklists Guide](/docs/visionBoard/checklists).
