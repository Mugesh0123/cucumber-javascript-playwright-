const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const LoginPage = require('../pages/LoginPage');

const browserType = process.env.BROWSER || 'chromium';
const baseUrl = process.env.BASE_URL || 'https://demowebshop.tricentis.com';

let browser, page, loginPage;


Before(async function () {
   
    // browser = await require('playwright')[browserType].launch({ headless: false });
    // const context = await browser.newContext();
    // page = await context.newPage();
    // loginPage = new LoginPage(page);
    // await loginPage.navigate(baseUrl);

});

After(async function () {
  // Close page, context, and browser if they exist
//   if (this.page) {
//     await this.page.close();
//   }
//   if (this.context) {
//     await this.context.close();
//   }
//   if (this.browser) {
//     await this.browser.close();
//   }
});