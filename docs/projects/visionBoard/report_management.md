---
sidebar_position: 5
title: Report Management
slug: /visionBoard/report-management
---


visionBoard has the capability of generating reports that can be used to analyze data.

## Generate the Reports

_Not yet implemented_

## Showcase the Reports

The simplest option is to run the workflow `show-reports`, which will start an HTTP server that lists the content in the `output` folder. Any asset previously generated can be accessed via a web browser using this approach. 

### Static Server

visionBoard includes the option to run a local HTTP server to serve the artifacts generated during its processes. This allows easy access to outputs without needing external hosting.

You can customize the server by defining the following environment variables:

- `IP`: The IP address the server should bind to (default: `localhost`).
- `PORT`: The port the server should use (default: `3000`).

For example, to run the server on a specific IP and port:

```bash
export IP=192.168.1.100
export PORT=8080
visionBoard workflow run --name show-reports
```

If these variables are not set, visionBoard will default to `localhost:3000`.