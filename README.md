# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ npm i
```

### Local Development

```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Reviewing Pull Requests

This project uses GitHub Actions to automate building, testing, and generating a preview for pull requests. Here's how you can review pull requests effectively:

1. **Open the Pull Request**:
   - Navigate to the **Pull Requests** tab in the repository.
   - Select the PR you want to review.

2. **Access the Build Artifact**:
   - Go to the **Actions** tab in the repository.
   - Find the workflow run associated with the pull request (usually named `Pull Request Pipeline`).
   - Scroll down to the **Artifacts** section and download the artifact named `site-preview-pr-<PR_NUMBER>` (e.g., `site-preview-pr-123`).

3. **Preview the Changes**:
   - Extract the downloaded artifact.
   - Serve the files locally using a simple HTTP server. For example:
     ```bash
     npx http-server <extracted-folder-path> -p 8080
     ```
   - Open `http://localhost:8080` in your browser to review the changes.

4. **Provide Feedback**:
   - Leave comments or suggestions directly in the pull request under the **Files changed** tab.


### Deployment

There is a [pipeline](.github/workflows/deploy.yml) that will deploy anytime that a new commit lands to `main` branch.