const { exec } = require('child_process');
const path = require('path');

// Paths to feature files and step definitions
const featurePath = path.join(__dirname, 'features', 'specs', '*.feature');
const stepDefinitionsPath = path.join(__dirname, 'features', 'step-definitions', '*.js');
const supportPath = path.join(__dirname, 'features', 'support', '*.js');

// Cucumber command
const cucumberCommand = `npx cucumber-js ${featurePath} --require ${stepDefinitionsPath} --require ${supportPath} --format json:cucumber-report.json`;

// Execute the Cucumber command
exec(cucumberCommand, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Stdout: ${stdout}`);
});