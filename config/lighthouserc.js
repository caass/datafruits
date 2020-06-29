module.exports = {
  ci: {
    collect: {
      method: 'node',
      headful: false,
      url: 'http://localhost:3000',
      startServerCommand: 'node fastboot_server/server.js',
      startServerReadyPattern: 'HTTP server started;',
      startServerReadyTimeout: 100000,
      settings: {
        skipAudits: ['is-on-https', 'uses-http2', 'redirects-http']
      }
    },
    assert: {
      preset: 'lighthouse:recommended'
    },
    upload: {
      target: 'filesystem',
      outputDir: 'lhci',
      reportFilenamePattern: 'lighthouse-report-%%DATE%%.%%EXTENSION%%'
    },
  },
};
