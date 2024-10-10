const { defineConfig } = require("cypress");

module.exports = defineConfig({
    defaultCommandTimeout: 60000,
    video: true,
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});
