# Tigerhall assignment

- [Assignment description](./Engineerin-Senior%20Frontend%20Developer-060623-113916.pdf)

### Getting Started

First, run the development server:

- Step 1 : clone the repository

```bash
git clone https://github.com/fullstackNRJ/Tigerhall-assignment.git
```

- Step 2 : install dependencies

```bash
cd Tigerhall-assignment && npm i
```

- Step 3 : Start local development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### e2e tests

- Step 1 : Install chromium and other browsers to run test cases

```bash
npx playwright install
```

- Step 2 : Run tests (if the local dev server is running playwright will reuse it else it will start new web dev server)

```bash
npm run test:e2e
```

Tip: To test in UI mode use

```bash
npx playwright test --ui
```

## Libraries used

- chakra ui
- playwright
