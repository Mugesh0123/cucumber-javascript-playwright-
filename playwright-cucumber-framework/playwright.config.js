module.exports = {
    timeout: 30000,
    testDir: './features', // Specify the directory for tests
    use: {
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreDefaultArgs: ['--disable-extensions'],
        launchOptions: {
            slowMo: 50,
        },
        ignoreHTTPSErrors: true,
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
};