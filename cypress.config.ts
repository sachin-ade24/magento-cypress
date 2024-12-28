import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/test/**/*cy.ts",
    testIsolation: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
