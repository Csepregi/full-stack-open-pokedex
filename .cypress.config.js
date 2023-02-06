const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents() {},
    baseUrl: "http://localhost:8080",
  },
});
