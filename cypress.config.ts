import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/test/**/*.ts",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
