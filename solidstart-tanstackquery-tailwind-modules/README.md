# SolidStart-TanStackQuery-Tailwind-Modules

This starter kit features **SolidStart**, combined with **TanStack Query**, and **Tailwind CSS**, and **CSS Modules**.

## Table of Contents

- [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Included Tooling](#included-tooling)
  - [Example Components](#example-components)
- [Installation](#installation)
  - [CLI](#cli)
  - [Manual](#manual)
- [Commands](#commands)
- [Demo Implementation](#demo-implementation)

## Overview

This project was developed using the starter.dev kit, and it features **SolidStart**, combined with **TanStack Query**, and **Tailwind CSS**, and **CSS Modules**. It is a great starting point for building a Solid application with a GraphQL API.

SolidStart is a meta framework for solidJS that is built on top of the React API and offers a leaner and more performant alternative to React. TanStack Query makes fetching, caching, synchronizing and updating server state in your web applications a breeze. Tailwind CSS is a utility-first CSS framework that offers a lot of flexibility and is easy to use. It is also very performant and offers a lot of customization options. CSS Modules helps us to eailsy group our tailwind/custom classes. 

### Tech Stack

- [SolidStart](https://start.solidjs.com/getting-started/what-is-solidstart/)
- [TanStack Query](https://tanstack.com/query/v4/docs/solid/overview)
- [Tailwind CSS](https://tailwindcss.com/)
- [CSS Modules](https://css-tricks.com/css-modules-part-1-need/)

### Included Tooling

- [Vitest](https://vitest.dev/) - Test runner
- [Storybook](https://storybook.js.org/) - Component library
- [Typescript](https://www.typescriptlang.org/) - Type checking
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Installation

This README is written with npm in mind but you can use other manager runners (yarn, pnpm, etc.)

### CLI (Recommended)

```bash
npm create @this-dot/starter --kit solidstart-tanstackquery-tailwind-modules
```

- Follow the prompts to select the solidstart-tanstackquery-tailwind-modules starter kit and name your new project.
- `cd` into your project directory and run `npm install`.
- Run `npm run dev` to start the development server.
- Open your browser to `http://localhost:5173` to see the included example code running.

### Manual

```bash
git clone https://github.com/thisdot/starter.dev.git
```

- Copy and rename the `starters/solidstart-tanstackquery-tailwind-modules` directory to the name of your new project.
- `cd` into your project directory and run `npm install`.
- Run `npm run dev` to start the development server.
- Open your browser to `http://localhost:5173` to see the included example code running.

## Commands

- `dev` - Starts a development server backed by Vite on localhost port 5173 with HMR
- `build` - Builds a production version of the app to deploy
- `start` - Starts the production build with a local version of adapter.
- `test` - Runs the test suite
- `storbook` - To showcase the component library
- `lint` - Uses eslint to find potential issues in the codebase
- `lint-fix` - Tries to auto-fix potential issues
- `format` - Fixes formatting issues in the codebase

## Demo Implementation

[Repository](https://github.com/thisdot/starter.dev-github-showcases/tree/main/solidstart-tanstackquery-tailwind-modules)

[Live demo](https://solidstart-tanstackquery-tailwind-modules.starter.dev/)

The demo application re-implements some of GitHub's pages and functionality. It uses the OAuth credentials in GitHub to authenticate users with their GitHub accounts and uses window.fetch() to fetch data from the GitHub API. Check out the link above to learn more or check out the demo!
