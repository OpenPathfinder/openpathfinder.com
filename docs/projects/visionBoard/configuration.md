---
sidebar_position: 3
title: Configuration
slug: /visionBoard/configuration
---

## Secrets Management

Both the GitHub token and database credentials are considered sensitive information. You can manage these secrets using environment variables or `.env` files for [local development](/docs/visionBoard/installation#from-source-code). Here’s a unified guide on handling these secrets:

### Environment Variables

Set secrets as environment variables directly in your shell or environment configuration. For example:

- **Database Secrets**:
  - `DB_HOST`: Database host
  - `DB_USER`: Database user
  - `DB_PASSWORD`: User password
  - `DB_NAME`: Database name
  - `DB_SSL`: Enable SSL (optional, defaults to `false` if not set).

- **GitHub Token**:
  - `GITHUB_TOKEN`: Token with at least `repo:read` permissions (or `admin:read` for enhanced functionality).

### Using a `.env` File

For [local development](/docs/visionBoard/installation#from-source-code), you can use a `.env` file to centralize secrets management. The `.env` file stores environment variables in a key-value format, making them easy to load into your application.

Here’s an example `.env` file:

```env
DB_HOST=localhost
DB_USER=postgres
DB_PASSWORD=securepassword
DB_NAME=visionboard
DB_SSL=false
GITHUB_TOKEN=your_github_token
```

Load this file into your application using the following command:

```bash
node --env-file=.env visionboard.js workflow run --name <workflowName>
```

:::note 

Avoid storing sensitive data like passwords in plaintext `.env` files in production. Instead, consider using tools like HashiCorp Vault or AWS Secrets Manager for secure management.

:::

### Docker Secrets Injection

When using Docker, inject secrets via the `-e` flag or use a `.env` file with `--env-file`. Examples:

- **Injecting manually**:

  ```bash
  docker run --rm \
    -e DB_HOST=localhost \
    -e DB_USER=postgres \
    -e DB_PASSWORD=securepassword \
    -e GITHUB_TOKEN=mytoken \
    ghcr.io/openpathfinder/visionboard:latest workflow run --name <workflowName>
  ```

- **Using a `.env` file**:

  ```bash
  docker run --rm --env-file=.env \
    ghcr.io/openpathfinder/visionboard:latest workflow run --name <workflowName>
  ```
