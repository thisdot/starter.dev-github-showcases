import { defineConfig } from "cypress";

export default defineConfig({
  env: {
    authUrl: "/redirect",
  },
  e2e: {
    baseUrl: "http://localhost:3000",
  },
});
