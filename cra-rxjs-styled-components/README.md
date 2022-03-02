# CRA-RxJS-SC App
This is a demo application that re-implements some of GitHub's pages and functionality.

## Table of Contents
- [Overview](#overview)
  - [Featured Tech Stack](#featured-tech-stack)
  - [Included Tooling](#included-tooling)
- [Architectural Decisions](#architectural-decisions)
- [Getting Started](#getting-started)
  - [Cloning the Repository](#cloning-the-repository)
  - [Env Setup](#env-setup)
  - [0Auth Setup](#oauth-setup)
  - [Installation](#installation)
- [Development](#development)


## Overview

### Featured Tech Stack
* React
* RxJS
* TypeScript

### Included Tooling
* Prettier
* React Testing Library
* Jest
* ESLint
* Styled Components


## Architectural Decisions
- Project uses `snake-case` file naming convention over traditional `PascalCase`
- Components should be contained in their own `components` directory or module folder and exported via the index file
- The following directories should be restricted to the following types of components:
  - routes: Only contains top-level page components
  - hooks: Only reusable global hooks


## Getting Started

### Cloning the Repository
Clone the starter.dev-showcases repository from https://github.com/thisdot/starter.dev-showcases

```bash
git clone https://github.com/thisdot/starter.dev-showcases.git
```

### Env Setup
This project comes with a `.env.example` file.

```
REACT_APP_API_URL=https://api.starter.dev/api
REACT_APP_BASE_URL=http://localhost:3000
```
While in the project directory, run this command in your terminal.

```bash
cp .env.example .env
```

### OAuth Setup
To use this app and authenticate with GitHub, we need to setup the OAuth credentials in GitHub.

- Navigation to the [GitHub settings page](https://github.com/settings/profile).
- Click the `Developer settings` link in the left sidebar.
- Click the `OAuth Apps` link in the sidebar.
- Click the `New OAuth App` button at the top right of the page.

Register a new OAuth application form details

- Application name - Enter a name for the application
- Homepage URL - Enter the url of the RxJS application. _(If running locally http://localhost:3000 otherwise the url of the application on the internet)_
- Authorization callback URL - Enter the url of the applications OAuth callback. _(If running locally http://localhost:3000/redirect)

### Installation
Open the project root directory in your terminal and navigate to the `cra-rxjs-styled-components` folder.

```bash
cd cra-rxjs-styled-components
```

Run `yarn` to install the dependencies.

```bash
yarn
```

## Development
In the `cra-rxjs-styled-components` folder start the app.

```bash
yarn start
```

Open your browser to [http://localhost:3000](http://localhost:3000)



