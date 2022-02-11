/*** DO NOT EDIT THIS FILE BEFORE READING THIS
 * If this line is here, then this file was re-generated by running `npm run config`.
 * To modify:
 * - Create a `.env` file at project root (this will be gitignored by default)
 * - Change any environment variables there
 * - Change any add the, to the  variables there
 DO NOT EDIT THIS FILE BEFORE READING THIS */

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: '/api',
  graphApiUrl: 'https://api.github.com/graphql',
  publicGraphqlUrl: 'http://localhost:4000/api/graphql',
  redirectUrl: 'https://localhost:4200/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
