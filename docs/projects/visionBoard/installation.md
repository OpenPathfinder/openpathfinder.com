---
sidebar_position: 2
title: Installation
slug: /visionBoard/installation
---

# Installation Guide for visionBoard


This guide outlines multiple methods to install visionBoard. After installation, you can verify that the binary is working correctly by running the `version` command. The console output should resemble:

```
[08:36:40.532] INFO: visionBoard@0.1.0-beta2 (MIT)
```

## Install via npm

You can install visionBoard globally using npm:

```bash
npm i -g visionBoard
visionBoard version
```

Alternatively, use it directly with `npx`:

```bash
npx visionBoard version
```

## Using Docker

To use visionBoard via Docker:

1. Pull the Docker image:

   ```bash
   docker pull ghcr.io/openpathfinder/visionboard:latest
   ```

2. Run the container and check the version:

   ```bash
   docker run --rm ghcr.io/openpathfinder/visionboard:latest version
   ```

3. (Optional) Create an alias for convenience:

   ```bash
   alias visionBoard="docker run --rm ghcr.io/openpathfinder/visionBoard:latest"
   ```

## From Source Code

To install visionBoard from source:

1. Clone the repository:

   ```bash
   git clone https://github.com/OpenPathfinder/visionBoard.git
   ```

2. Navigate to the project directory:

   ```bash
   cd visionBoard
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Verify the installation:

   ```bash
   node visionboard.js version
   ```

5. (Optional) Create an alias for convenience:

   ```bash
   alias visionBoard="node visionBoard.js"
   ```
