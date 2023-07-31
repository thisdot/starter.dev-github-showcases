# Expo-Zustand-Styled-Components

This starter kit features **Expo**, combined with **Zustand**, and **Styled Components**.

## Table of Contents

- [Overview](#overview)
  - [Tech Stack](#tech-stack)
  - [Included Tooling](#included-tooling)
- [Installation](#installation)
  - [CLI](#cli-recommended)
  - [Manual](#manual)
- [Commands](#commands)
- [Demo Implementation](#demo-implementation)

## Overview

This starter kit features **Expo**, combined with **Zustand**, and **Styled Components**.

Expo is a framework and a platform for universal React applications. It allows you to build native iOS and Android apps using JavaScript and React. Zustand is a tiny state management solution that is built on top of React Hooks. Styled Components is a library that allows you to write CSS in your JavaScript/TypeScript with no class name bugs.

### Tech Stack

- [Expo](https://expo.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Styled Components](https://styled-components.com/)
- [React Navigation](https://reactnavigation.org/)

### Included Tooling

- [Typescript](https://www.typescriptlang.org/) - Type checking
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting

## Installation

This README is written with npm in mind but you can use other manager runners (yarn, pnpm, etc.)

### CLI (Recommended)

```bash
npm create @this-dot/starter --kit expo-zustand-styled-components
```

- Follow the prompts to select the expo-zustand-styled-components starter kit and name your new project.
- `cd` into your project directory and run `npm install`.
- Run `npm run web` to start the development server.
- Open your browser to `http://localhost:19006` to see the included example code running.

### Manual

```bash
git clone https://github.com/thisdot/starter.dev.git
```

- Copy and rename the `starters/expo-zustand-styled-components` directory to the name of your new project.
- `cd` into your project directory and run `npm install`.
- Run `npm run start` to start the development server.
- Press `w` to open the web version of the app.
- Press `i` to open the iOS simulator.
- Press `a` to open the Android emulator.

## Commands

- `build` - Builds a production version of the app to deploy
- `start` - Starts the development server
- `test` - Runs the test suite
- `lint` - Uses ESLint to find potential issues in the codebase
- `lint-fix` - Tries to auto-fix potential issues
- `format` - Fixes formatting issues in the codebase

## Demo Implementation

[Repository](https://github.com/thisdot/starter.dev-github-showcases/tree/main/expo-zustand-styled-components)

[Live demo](https://expo-zustand-styled-components.starter.dev/)

The demo application re-implements some of GitHub's pages and functionality. It uses the OAuth credentials in GitHub to authenticate users with their GitHub accounts and uses fetch() to fetch data from the GitHub API. Check out the link above to learn more or check out the demo!
