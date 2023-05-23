const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: "../Test/TestEvidence/Screenshots",
    videosFolder: "../Test/TestEvidence/Videos",
    screenshotsOnFailure: true,
    baseUrl: "https://localhost:5002"
  },
});
