# Contribution guide

![Vue3 + TS + Quasar](public/vue3-ts-quasar.png)

Welcome to the Vue3 + TS + Quasar GitHub showcases contribution guide.

We're glad to see that you'd love to contribute. This document will try to get you up to speed as fast and as smoothly as possible.

If you were instead looking to just run the application, then please read our [README](README.md) for details on how to do so.

### Key Technologies used

- [Vue 3](https://vuejs.org/) - A progressive frontend framework.
- [GraphQL](https://graphql.org/) with [Apollo](https://www.apollographql.com/) - We use this for **fetching data** from the [GitHub GraphQL API](https://docs.github.com/en/graphql) and it allows us to only retrieve the information we want at any given point in time.
- [Typescript](https://www.typescriptlang.org/) - TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
- [Quasar 2.x](https://quasar.dev) - A Vue.js based framework, which allows you as a web developer to quickly create responsive websites/apps in many flavours. It also contains several ready-made UI components that accelerate the development of this project.
- [Yarn](https://yarnpkg.com/) - We'll be using this to manage our dependencies.

### Other technologies used

- [Pinia](https://pinia.vuejs.org/) - Pinia the official Vue3 recommended **state management** solution that offers a cleaner API and simpler API than [VueX](https://vuex.vuejs.org/), it's predecessor. It is useful for managing global state in our application such as storing information about our currently logged in user.
- [Storybook](https://storybook.js.org/) - Storybook provides us with **an interface that can be used by non-developers to make design decisions** without needing to code. Each storybook acts as a sort of design document for the entire application and can further streamline the interactions between stakeholders/designers and the engineers that do the actual building of the product.

## Project structure

This project uses the [standard Quasar project directory structure](https://quasar.dev/quasar-cli-vite/directory-structure) with a few additional directories.

```
├── public/ # pure static assets (directly copied)
├── src/
│ ├── assets/ # dynamic assets (processed by webpack)
│ ├── components/ # .vue components used in pages & layouts
| |  ├── *.stories.ts # Storybook files
| |  ├── /index.ts # Re-exports our components for cleaner imports in other areas
| |── composables/ # vue composables
│ ├── css/ # CSS/Sass/... files for your app
| | ├── app.sass
| │ └── quasar.variables.sass # Quasar Sass variables for you to tweak
│ ├── layouts/ # layout .vue files
│ ├── pages/ # page .vue files
│ ├── boot/ # boot files (app initialization code)
│ ├── router/ # Vue Router
| | ├── index.js # Vue Router definition
| │ └── routes.js # App Routes definitions
│ ├── stores/ # Pinia Stores (if not using Vuex)
| | ├── index.js # Pinia initialization
| │ ├── <store> # Pinia stores...
| │ └── <store>...
│ ├── App.vue # root Vue component of your App
│ └── index.template.html # Template for index.html
├── src-ssr/ # SSR specific code (like production Node webserver)
├── src-pwa/ # PWA specific code (like Service Worker)
├── dist/ # where production builds go
│ ├── spa/ # example when building SPA
│ ├── ssr/ # example when building SSR
│ ├── electron/ # example when building Electron
│ └── ....
├── quasar.config.js # Quasar App Config file
├── babel.config.js # Babeljs config
├── jest.config.js # Jest config
├── .eslintignore # ESlint ignore paths
├── .eslintrc.js # ESlint config
├── .postcssrc.js # PostCSS config
├── .gitignore # GIT ignore paths
├── .prettierignore # prettier ignore paths
├── .prettierrc # prettier config
├── package.json # npm scripts and dependencies
├── CONTRIBUTION.md` # contribution guide for this showcase
└── README.md # readme for this showcase
```

## Architectural decisions

### Why Quasar?

[Quasar](https://quasar.dev) has a large number of prebuilt vue components that are easily customizable. This saves us time by allowing us to focus on our app's functionality rather than the components and CSS required to make that happen.

### Relevant interactions in the codebase

Who can access what is an important consideration when trying to build a maintainable codebase.

- Composables should not call each other. If a composable needs another composable, then it must accept that composable through it's creator arguments
- Custom CSS should be avoided in favour of Quasar CSS classes whenever possible. This makes it easier for a new entrant into the codebase to get up to speed.
- Tests should ideally test the core functionality of whatever they are testing and not just check if a component is being mounted.

### Naming conventions

#### Vue

- Component names should use `TitleCase`
- Each component should have a `name` attached to it when declaring it with `defineComponent()`

#### CSS

- All class names should be in `kebab-case`
- Custom styling should only be used in absence of an equivalent quasar class

#### JS/TS

- `ref` s should be in `camelCase`
- constants (non-reactive values) are in `UPPERCASE_SNAKE_CASE`
- Every ref or variaible that does not have its type automatically inferred should have explicit types

## Reporting bugs

> TODO
