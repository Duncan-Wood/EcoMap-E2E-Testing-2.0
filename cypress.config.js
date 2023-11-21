const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    browser: "chrome",
    baseUrl: "https://ecomapmetamap.com/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
