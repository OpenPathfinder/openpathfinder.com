---
sidebar_position: 3
title: Usage
slug: /fortSphere/usage
---


🫠 If you are not familiar with the tool [checkout this demo](/docs/fortSphere#demo)





### Version Command

Display the current version of fortSphere:

```bash
fortsphere version
```

### Policy Management Command

Manage policies for your GitHub organization:

- List all available policies:
    ```bash
    fortsphere policy --list
    ```
- Apply a policy to a GitHub organization:
    ```bash
    fortsphere policy --apply <policy> --github-org <githubOrg>
    ```


### GitHub Tokens

To run this application, you need a GitHub token with `admin:write` permissions.

#### Injecting the Token

- Use an environment variable named `GITHUB_TOKEN` to supply the token.
- Alternatively, you can use a `.env` file and load it with the command `node --env-file=.env fortsphere.js policy --apply <policy> --github-org <githubOrg>` when doing local development
- While using docker images you can use `docker run --rm -e GITHUB_TOKEN=mytoken ghcr.io/openpathfinder/fortsphere:latest policy --apply <policy> --github-org <githubOrg>`
