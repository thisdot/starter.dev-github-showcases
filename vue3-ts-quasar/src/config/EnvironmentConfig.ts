export class EnvironmentConfig {
  //! This will not work if we do SSR deployments that don't provide access to the client window object - Currently deploying SPA
  private static _IS_DEV = window.location.hostname === 'localhost';

  //* API stuff
  private static _DEV_API_URL = 'https://api.starter.dev';
  private static _PROD_API_URL = 'https://api.starter.dev';

  /** The starter.dev API url */
  static API_URL = EnvironmentConfig._IS_DEV
    ? EnvironmentConfig._DEV_API_URL
    : EnvironmentConfig._PROD_API_URL;

  /** The GitHub GraphQL API endpoint */
  static GRAPHQL_URL = 'https://api.github.com/graphql';

  //* Redirect stuff
  private static _DEV_REDIRECT_URL = 'http://localhost:8080/redirect';
  private static _PROD_REDIRECT_URL =
    'https://vue3-ts-quasar.starter.dev/redirect';

  /** The URL we redirect to after authentication  */
  static REDIRECT_URL = EnvironmentConfig._IS_DEV
    ? EnvironmentConfig._DEV_REDIRECT_URL
    : EnvironmentConfig._PROD_REDIRECT_URL;
}
