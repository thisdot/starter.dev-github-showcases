# Angular Github Clone

A GitHub client built with Angular v13, TailwindCSS, and Apollo Client.

## Working Application

Check out the [live application](http://angular-apollo-tailwind.starter.dev/)

A GitHub account is required to login and view the application as it requires your an access token to retrieve the data.

## Getting Started

### Requirements

- node v16
- yarn

### Setup

1. Create your project `.env`

```
cp .env.example .env
```

2. Install dependencies: `yarn install`
3. Run the project: `yarn start`

## Building

This project was generated using the Angular CLI.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Running secure server

1. To run https (recommended for Github OAuth), first create a key and cert:

```bash
yarn run generate-cert
```

2. Then add the new cert to the macOS keychain by opening Keychain Access. Then under Certificates, paste the generated certificate file into the list. Change the permissions to "Always Trust" by right-click the certificate, selecting Get Info, and expanding the Trust section.

3. Then run the server:

```bash
ng serve --ssl true --ssl-key <key_file> --ssl-cert <cert_file>
```

4. And navigate to `https://localhost:4200/`.

### Running with a proxy to server

Create a `proxy.conf.json` based on the `proxy.conf.example.json`. The example uses [ngrok](https://ngrok.com/) and is recommended for local a secure server. Be sure to set authtoken after install.

Start a tunnel for a server:

```bash
ngrok http <custom_server_port>
```

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Possible Features and Enhancements

This project is built using a number of beginner to advanced techniques to solve a number of different problems.
The following is a list of additional features that could be build into the application to either make it feel more like GitHub or add a unique, personal touch.

| Project                     | Description                                                                                                                  | Skill        |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ------------ |
| Repo Star Categories        | Add a repo to a specialised list other than the default Star/Unstarred list.                                                 | Beginner     |
| User Organizations          | List a user's organizations.                                                                                                 | Beginner     |
| Repo Dependencies List      | Display the main dependencies/packages used in a repo.                                                                       | Beginner     |
| Repo Dependencies Viewer    | Built on the dependency list with the ability to view repos that share the same dependency.                                  | Beginner     |
| Repo languages              | Display what are the languages used in the repository.                                                                       | Beginner     |
| Contributors                | Display avatars of contributors for each repo.                                                                               | Beginner     |
| Activity Dashboard          | Display a list of latest commits and activity for a specific repo or all repos.                                              | Beginner     |
| Profile overview page       | Add `Overview` tab to Profile page and display profile readme if it exists.                                                  | Intermediate |
| Profile pinned repositories | Display pinned repositories on an `Overview` tab of Profile page.                                                            | Intermediate |
| Commit pulse                | Integrate a chart library to view the lifeline of a project and its contributions.                                           | Intermediate |
| Pull request view           | Create a page for displaying pull request details and allow navigation to it from the Pull requests page.                    | Intermediate |
| Issue view                  | Create a page for displaying issue details and allow navigation to it from the Issues page.                                  | Intermediate |
| File finder                 | Implement file fuzzy search functionality - available under the `Go to file` button                                          | Intermediate |
| Contributor graph           | Display GitHub contributor graph on an `Overview` tab of profile page                                                        | Advanced     |
| Deployed Environments       | Display deployed environments for a repo.                                                                                    | Advanced     |
| CI/CD Pipelines             | Graphical view of pipelines and github actions with [graphql-inspector](https://graphql-inspector.com/docs/products/github). | Advanced     |
