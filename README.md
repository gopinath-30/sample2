## sample2 — Vite + React (minimal starter)

A minimal Vite + React sample application used for quick development and experimentation. It includes Hot Module Replacement (HMR), a basic ESLint configuration, and a small demo `App` component with a counter.

## Features

- Vite dev server with HMR
- React (functional components + hooks)
- Minimal project structure for quick starts

## Prerequisites

- Node.js (v16+ recommended) and npm or Yarn installed on your machine.

## Quick start

1. Install dependencies:

```bash
npm install
# or
yarn
```

2. Start the dev server:

```bash
npm run dev
# or
yarn dev
```

3. Open the app in your browser at the URL shown in the terminal (usually http://localhost:5173).

4. Build for production:

```bash
npm run build
# or
yarn build
```

5. Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Project structure

- [src/](src) — application source
	- [App.jsx](src/App.jsx) — main demo component with a counter
	- [main.jsx](src/main.jsx) — app entry that mounts `App`
	- [assets/](src/assets) — static assets (e.g., `react.svg`)
- public/ — static files served at root (e.g., `/vite.svg`)
- vite.config.js — Vite configuration
- eslint.config.js — ESLint configuration

## Scripts

- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — locally preview production build

Check `package.json` for the exact scripts available.

## Notes about the demo

- The demo `App` component (`src/App.jsx`) is intentionally small and demonstrates:
	- importing images from `src/assets` and `/vite.svg`
	- using the `useState` hook for a simple counter
	- basic styling via `src/App.css`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

This repository does not include a license file. Add a `LICENSE` if you plan to open-source the project.
