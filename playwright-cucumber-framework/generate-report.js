const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'cucumber-report.json', // Path to the JSON report
  output: 'cucumber-report.html',  // Path to the generated HTML report
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true, // Automatically open the report in the browser
};

console.log('Generating HTML report...');
reporter.generate(options);
console.log('HTML report generated successfully!');