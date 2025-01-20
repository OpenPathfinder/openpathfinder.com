---
sidebar_position: 7
title: Importers
slug: /visionBoard/importers
---

# Importers

Importers are workflows that allow us to bulk import information from projects directly using the CLI. This is especially useful for registering activity related to [compliance checks](/docs/visionBoard/Checks) that are manually included in the database, such as [softwareDesignTraining](/docs/checks/softwareDesignTraining).

## Bulk Importer

The `bulk-import` workflow streamlines the import process ([reference](https://github.com/OpenPathfinder/visionBoard/pull/182)) and can be used as follows:

```bash
visionBoard workflow run --name bulk-import --file my-data.json
```


### File Format

To initiate the import process, VisionBoard expects a JSON file compliant with [this JSON Schema](https://github.com/OpenPathfinder/visionBoard/blob/main/src/schemas/bulkImport.json).
