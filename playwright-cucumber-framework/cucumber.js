// filepath: d:\testframework\playwright-cucumber-framework\cucumber.js
module.exports = {
  default: '--require features/step-definitions/**/*.js --require features/support/**/*.js --format json:cucumber-report.json --format html:cucumber-report.html',
};