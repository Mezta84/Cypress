const { defineConfig } = require("cypress");


module.exports = defineConfig({
  projectId: 'rfisob',
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,ts,feature,tsx,jsx}",
    viewportHeight: 920,
    viewportWidth: 1460,
    screenshotOnRunFailure: true,
    video: false,
    
  },
  retries: {
    runMode: 1,
    openMode: 1,
    },
  env: {
    webdriveruni_homepage: "http://www.webdriveruniversity.com",
    first_name: "Salma"
  }
});
