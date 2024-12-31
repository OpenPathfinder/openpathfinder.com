---
title: Contribute
---

## Before Anything

The project welcomes all contributions from anyone willing to work in good faith with other contributors and the community. No contribution is too small, and all contributions are valued. **Any contribution to this project must follow the [Code of Conduct](#code-of-conduct) and the [DCO](#developers-certificate-of-origin-11).**

---

## Code of Conduct

The project has a [Code of Conduct](/code_of_conduct) to which all contributors must adhere. This ensures a respectful and inclusive environment for everyone involved.

---

## Developer's Certificate of Origin 1.1

```text
By making a contribution to this project, I certify that:

 (a) The contribution was created in whole or in part by me and I
     have the right to submit it under the open source license
     indicated in the file; or

 (b) The contribution is based upon previous work that, to the best
     of my knowledge, is covered under an appropriate open source
     license and I have the right under that license to submit that
     work with modifications, whether created in whole or in part
     by me, under the same open source license (unless I am
     permitted to submit under a different license), as indicated
     in the file; or

 (c) The contribution was provided directly to me by some other
     person who certified (a), (b) or (c) and I have not modified
     it.

 (d) I understand and agree that this project and the contribution
     are public and that a record of the contribution (including all
     personal information I submit with it, including my sign-off) is
     maintained indefinitely and may be redistributed consistent with
     this project or the open source license(s) involved.
```

---

## Supporting the Project

We are committed to providing tools that empower developers and organizations. However, building and maintaining open-source software requires resources. If you find value in our tools, consider supporting the project through donations.

### How You Can Help

- **Individual Donations**: Contributions of any size are welcome and help us continue our work.
- **Corporate Sponsorship**: If you represent a company, you can sponsor the project and gain recognition while supporting the open-source community.

For more details, visit our [Sponsorship Page](/support).

---

## Where to Contribute

:::tip

Any issue labeled [help wanted](https://github.com/search?q=org%3AOpenPathfinder+label%3A%22help+wanted%22+state%3A"open"&type=issues) or [good first issue](https://github.com/search?q=org%3AOpenPathfinder+label%3A%22good+first+issue%22+state%3A"open"&type=issues) is a great opportunity to help the project.

:::

Contributions can take many forms, from improving documentation to fixing bugs or adding features. Below are specific areas to focus your contributions:

### Website

Contribute by improving documentation, user guides, and resources hosted on the [OpenPathfinder website](https://openpathfinder.org). Typical contributions include:

- Adding or editing guides.
- Fixing typos and broken links.
- Enhancing readability and accessibility.

### fortSphere

Help improve the CLI by:

- Adding new commands.
- Enhancing existing policies.
- Fixing bugs or optimizing performance.
- Expanding test coverage.

### visionBoard

VisionBoard contributions can include:

- Writing or improving documentation.
- Adding new compliance checks.
- Enhancing dashboards or reports.
- Answering user questions or providing community support.
- Running infrastructure and advocating for the project.

---

## Pull Requests

### Creating a Good PR

Follow these steps to create a high-quality Pull Request (PR):

1. **Understand the Guidelines:**
   - Read the [Contributing Guidelines](/contribute).
   - Adhere to the [Code of Conduct](/code_of_conduct).
2. **Before You Start:**
   - Link your PR to an issue if it addresses a bug or feature request.
   - Sync with the main branch to avoid conflicts.
   - Focus on one issue or feature per PR.
3. **Writing the Code:**
   - Follow [coding standards](https://standardjs.com/).
   - Write or update tests to cover your changes.
   - Keep changes minimal and avoid unrelated edits.
4. **Writing the PR:**
   - Use a descriptive title.
   - Provide a detailed description, including **what**, **why**, and **how**.
   - Link related issues (e.g., `Closes #123`).
5. **Checklist Before Submission:**
   - [ ] Code is linted and passes style checks.
   - [ ] Tests are added, updated, and pass.
   - [ ] Documentation is updated (if applicable).
   - [ ] Branch is up-to-date with main.
6. **Engage with Feedback:**
   - Respond to comments promptly and revise as needed.
   - Check CI results and address any failures.

---

## Current Initiatives

### Solve Technical Debt

Contribute to the project by solving [technical debt issues](https://github.com/search?q=org%3AOpenPathfinder+label%3A%22technical-debt%22+state%3A"open"&type=issues), especially those tagged as [good first issue](https://github.com/search?q=org%3AOpenPathfinder+label%3A%22good+first+issue%22+state%3A"open"&type=issues).

### Research on Compliance Checks for visionBoard

Help by researching compliance checks, defining implementations, and suggesting improvements. Look for issues tagged [compliance-checks + research-needed](https://github.com/OpenPathfinder/visionBoard/issues?q=sort%3Aupdated-desc+is%3Aissue+is%3Aopen+label%3Acompliance-checks+label%3Aresearch-needed).

### Add Compliance Checks for visionBoard

Follow these steps to implement compliance checks:

- **1. Define a Good Implementation ([Example](https://github.com/OpenPathfinder/visionBoard/issues/43#issuecomment-2524594504)):**
  - Read the documentation (guidelines, best practices, etc.).
  - Brainstorm the implementation details (logic, alerts, tasks, validations, edge cases, etc.).
  - Reach an agreement on the implementation details before starting.
- **2. Update Check Record ([Example](https://github.com/OpenPathfinder/visionBoard/commit/55eaac59920a5229ef9eeaf859943578a66d1aeb)):**
  - Update the `compliance_checks` row with fields like `how_to_url`, `implementation_status`, `implementation_type`, and `implementation_details_reference`.
  - Test migration scripts using `npm run db:migrate` and `npm run db:rollback`.
  - Update the database schema with `npm run db:generate-schema`.
- **3. Implement the Business Logic ([Validator Example](https://github.com/OpenPathfinder/visionBoard/commit/44c41d119f0daefb7b2e496ba35d5ab65bcc319b) and [Check Example](https://github.com/OpenPathfinder/visionBoard/commit/6f1e16129ee0d01a1b9b536cd2dc6090b048b71f)):**
  - Add the specific validator in `src/checks/validators/index.js`.
  - Add the check logic in `src/checks/complianceChecks`.
  - Calculate `severity` accurately (`getSeverityFromPriorityGroup`).
  - Update relevant database tables (`compliance_checks_alerts`, `compliance_checks_tasks`, `compliance_checks_results`).
- **4. Ensure It Works as Expected:**
  - Add unit tests for the validator check.
  - Add integration test cases for the check.
  - Verify all tests pass.
  - Run `check run --name {check_code_name}` and verify database changes. Update the seed script if necessary (`npm run db:seed`).
- **5. Update the Website ([Example](https://github.com/OpenPathfinder/website/pull/9)):**
  - Review content at `https://openjs-security-program-standards.netlify.app/details/{check_code_name}`.
  - Create a PR to include check calculation details and mitigation information.

