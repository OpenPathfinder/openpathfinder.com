---
sidebar_position: 2
title: Installation
slug: /fortSphere/installation
---

## npm

You can install it globally:

```bash
npm i -g fortsphere
fortsphere version
```

You can use it as `npx`:

```bash
npx fortsphere version
```

## Docker container

You can use Docker:

```bash
docker pull ghcr.io/openpathfinder/fortsphere:latest
docker run --rm ghcr.io/openpathfinder/fortsphere:latest version
```

You can create an alias like `alias fortsphere="docker run --rm ghcr.io/openpathfinder/fortsphere:latest"`

## Source Code
To install fortSphere, clone the repository and install the dependencies:

```sh
git clone https://github.com/OpenPathfinder/fortSphere.git
cd fortsphere
npm install
```

You can create an alias like `alias fortsphere="node fortsphere.js"`