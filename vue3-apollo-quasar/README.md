# vue3-ts-quasar

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Fix for StoryBook

The issue was with some dependencies like
style-loader, sass-loader and css-loader. The recent versions don’t work with vue2 and 3.

so these are the versions that worked:

```json
"sass-loader": "^10.0.2",
"style-loader": "^1.3.0",
"css-loader": "^4.3.0",
```
also another dependency `@storybook/preset-scss`  is required which is to be added in the “**addons**” array in the `main.js` file inside the `.storybook` folder after successfully installing it using `yarn` or `npm`.

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
