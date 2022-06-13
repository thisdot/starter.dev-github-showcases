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
cp config.example.json cypress/configs/[new showcase app name].json
```

`baseUrl` is the URL where the app starts locally.

`startCommand` is the specific command needed to start the app.

`integrationFolder` likely will not need to be changed as we are striving to use one set of tests against all apps, but in an extremely rare scenario where a specific integration set is needed for an app, set that path here.

`env` can be used for a number of Cypress sepcific environment variables, but you can also add anything here that will possibly need to be mocked for specific pieces of the app code that needs to be controlled.

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
