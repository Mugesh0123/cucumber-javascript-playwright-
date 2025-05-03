const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const LoginPage = require('../pages/LoginPage');

let browser, page, loginPage;


Given('I open {string}', async function (url) {
  browser = await require('playwright').chromium.launch({ headless: false });
  const context = await browser.newContext();
  page = await context.newPage();
  loginPage = new LoginPage(page);
  await loginPage.navigate(url);


});

When('I click the {string} link', async function (linkText) {
  await loginPage.clickLink(linkText);
});

When('I enter {string} into the {string} field', async function (value, fieldName) {
  await loginPage.fillInput(fieldName, value);
});

When('I click the {string} button', async function (buttonText) {
  if (buttonText === 'Log in') {
    await loginPage.clickLoginButton(); // Use the clickLoginButton method from LoginPage
  } else {
    throw new Error(`Unsupported button text: ${buttonText}`);
  }
});

Then('I should see the {string} link', async function (linkText) {
  const isVisible = await loginPage.isLinkVisible(linkText); // Use the isLinkVisible method from LoginPage
  expect(isVisible).to.be.true; // Assert that the link is visible
});

