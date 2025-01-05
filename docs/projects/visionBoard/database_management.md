---
sidebar_position: 8
title: Database Management
slug: /visionBoard/database-management
---

This project requires a PostgreSQL instance to store and query data. Some commands do not require this dependency. The project uses [Knex](https://knexjs.org/) to handle database connections and maintenance activities, such as [seeds](https://knexjs.org/guide/migrations.html#seed-files), [migrations](https://knexjs.org/guide/migrations.html), and [rollback](https://knexjs.org/guide/migrations.html#rollback) of changes.

Knex works transparently for most users, but if you want to contribute by solving a bug or adding a new feature, it’s important to be familiar with these steps.

:::note
These commands are relevant only for [local development](/docs/visionBoard/installation#from-source-code) using npm. They are not applicable when using Docker.
:::

## Schema Management

Schema management involves maintaining the database structure. Use the following commands:

- **Check the schema**: Refer to the latest schema file at [/src/database/schema/schema.sql](https://github.com/OpenPathfinder/visionBoard/blob/main/src/database/schema/schema.sql).

- **Update the schema**: Generate a new schema file based on the current database state:

  ```bash
  npm run db:generate-schema
  ```

This ensures the schema file reflects the latest changes applied to the database.

## Migrations

Migrations manage incremental changes to the database schema, ensuring consistency across environments. Use these commands:

- **Run latest migrations**: Apply all pending migrations to update the database schema:

  ```bash
  npm run db:migrate
  ```

- **Rollback migrations**: Undo the most recent migration:

  ```bash
  npm run db:rollback
  ```

Rollbacks are useful for undoing changes if a migration introduces unintended issues.

## Seeding

Seeding populates the database with predefined data, which is especially useful for testing or development environments:

- **Seed the database**: Populate the database with seed data:

  ```bash
  npm run db:seed
  ```

For more details on seeding, refer to the [Knex documentation](https://knexjs.org/guide/migrations.html#seed-files).

---

If you encounter any issues with these commands, ensure your database connection is configured correctly and verify that the necessary environment variables are set. Check the [Configuration guide](/docs/visionBoard/configuration) for additional information.
