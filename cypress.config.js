const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.bbc.co.uk/sport/',
    retries: 0,
    experimentalOriginDependencies: true
  },
});
