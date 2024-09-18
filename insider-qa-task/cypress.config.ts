import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    watchForFileChanges: false,
    defaultCommandTimeout: 8000,
    hideXHRInCommandLog: true,
    includeShadowDom: true,
    viewportHeight: 900,
    viewportWidth: 1440,
    chromeWebSecurity: false,
    video: true,
    retries: {
      runMode: 1,
      openMode: 0,
    },
    setupNodeEvents(on, config) {

    },
  },
});
