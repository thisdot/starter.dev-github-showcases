# starter.dev e2e

An e2e testing suite used to test all starter.dev showcase apps, utilizing Cypress and start-server-and-test.

## Getting Started

### Requirements

- node v16
- yarn

### Setup

If you are wanting to test against an existing showcase app, you will first need to ensure you have everything installed and setup so that app is runnable -- in general, this just requires running `yarn install` and `cp .env.example .env` in the root of each project.

Then, here inside `starter-dev-e2e` you should be able to run:

```shell
yarn install
```

And:

```shell
SHOWCASE_APP=[your target showcase app] yarn test
```

Using `angular-apollo-tailwind` as a specific example:

```shell
SHOWCASE_APP=angular-apollo-tailwind yarn test
```

## Creating a new test target

If there's a new showcase app and you need to add a new configuration to point to that app, run:

```shell
cp config.example.config.ts cypress/configs/[new showcase app name].config.ts
```

Open the newly created `config.ts` file, copy the commented out JSON snippet, open the `script-config.json`, and paste a new entry for your new app with updated fields as needed (below is the same snippet found in the config file you just created -- make sure to keep the underscores here, it's important for the CLI script to work!):

```json
"your_app_name": {
    "responseUrl": "http://localhost:4200",
    "startCommand": "yarn start"
}
```

### Explanations of config values

`baseUrl` is the URL where the app starts locally.

`startCommand` is the specific command needed to start the app.

`env` can be used for a number of Cypress sepcific environment variables, but you can also add anything here that will possibly need to be mocked for specific pieces of the app code that needs to be controlled (such as Node events).

`env.authUrl` is the path the app needs to visit where an authentication check is performed and the test set will try to mock authentication, typically mosts apps `/` is sufficient enough as a route check is performed there.

## Development

If you are needing to develop new tests or verify specific tests against a showcase app instead of running the full suite in the background with no visual, first start the target app (`yarn dev` or otherwise in the showcase app package), then in a new process run:

```shell
SHOWCASE_APP=[your target showcase app] yarn test:watch
```

Using `angular-apollo-tailwind` again as a specific example:

```shell
SHOWCASE_APP=angular-apollo-tailwind yarn test:watch
```

As you make changes to the app or testing code, both the app process and Cypress should pick up on changes while they're both open.
