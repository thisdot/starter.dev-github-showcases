import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    authUrl: "/",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});

/* Place this entry into script-config.json, replacing your target app's name and making sure
 * to use underscores instead of hyphens in this script file:
 *
 *  "your_app_name": {
 *    "responseUrl": "http://localhost:4200",    // If the normal URL with your app's port doesn't respond in Cypress, try `http-get` instead of `http`
 *    "startCommand": "yarn start"
 *  }
 */
