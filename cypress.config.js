const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: null,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
