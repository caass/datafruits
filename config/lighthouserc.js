module.exports = {
  ci: {
    collect: {
      method: "node",
      headful: false,
      url: "http://localhost:3000",
      startServerCommand: "node fastboot_server/server.js",
      startServerReadyPattern: "HTTP server started;",
      settings: {
        skipAudits: ["is-on-https", "uses-http2", "redirects-http"],
        // --no-sandbox is needed when running Chrome inside a container
        chromeFlags: process.env.CI ? "--no-sandbox" : null,
      },
    },
    upload: {
      target: "filesystem",
      outputDir: "lhci",
      reportFilenamePattern: "lighthouse-report-%%DATE%%.%%EXTENSION%%",
    },
  },
};
