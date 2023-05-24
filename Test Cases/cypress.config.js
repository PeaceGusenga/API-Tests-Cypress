const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: "../TestEvidence/Screenshots",
    videosFolder: "../TestEvidence/Videos",
    screenshotsOnFailure: true,
    baseUrl: "https://localhost:5002"
  },
});
