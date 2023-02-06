const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: "http://localhost:8080",
    specPattern: path.resolve(__dirname, "path/to/src/**/*.cy.js"),
  },
});
