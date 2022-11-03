const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 5000,
  viewportWidth: 1000,
  viewportHeight: 900,
  
  e2e: {
    setupNodeEvents(on, config) {     
    },

    defaultCommandTimeout: 5000
  },
});
