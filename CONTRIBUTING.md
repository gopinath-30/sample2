## Contributing to sample2

Thanks for your interest in contributing. This document explains how to get the project running locally and the preferred workflow for fixes and enhancements.

### Getting started

1. Fork the repository and create a feature branch:

```bash
git checkout -b feature/your-change
```

2. Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

### Code style

- Keep changes focused and minimal per PR. Follow the existing code style in `src/` (ES modules, JSX, and simple functional components).
- Run linters (if configured) before opening a PR.

### Tests

There are no automated tests included in this starter. If you add tests, include instructions and a script in `package.json`.

### Submitting a PR

1. Open a Pull Request against the repository's main branch.
2. Describe the problem and your solution clearly in the PR description.
3. Keep commits small and meaningful; consider squashing related commits before merge.

### Reporting issues

- Open an issue describing the expected behavior and steps to reproduce.

### Contact

If you need help, open an issue and tag maintainers or collaborators.
