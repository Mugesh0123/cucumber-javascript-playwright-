// filepath: d:\testframework\playwright-cucumber-framework\features\support\timeout.js
const { setDefaultTimeout } = require('@cucumber/cucumber');

// Set the default timeout to 20 seconds (20000 milliseconds)
setDefaultTimeout(20000);