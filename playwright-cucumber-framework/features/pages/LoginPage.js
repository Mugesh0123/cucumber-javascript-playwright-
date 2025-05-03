const BasePage = require('../base/BasePage');
class LoginPage extends BasePage {
  constructor(page) {
    super(page); // Call the parent class constructor

    // Element locators specific to the login page
    this.linkText = (text) => `text=${text}`;
    this.inputField = (fieldName) => `input[name="${fieldName}"]`;
    this.buttonText = (text) => `text=${text}`;
    this.loginButton = 'input.button-1.login-button';
    
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async clickLink(linkText) {
    await this.click(this.linkText(linkText));
  }

  async fillInput(fieldName, value) {
    await this.type(this.inputField(fieldName), value);
  }

  async clickButton(buttonText) {
    await this.click(this.buttonText(buttonText));
  }
  async clickLoginButton() {
    await this.page.waitForSelector(this.loginButton, { state: 'visible' }); // Wait for the button to be visible
    await this.click(this.loginButton); // Use the click method from BasePage
  }


  async isLinkVisible(linkText) {
    return await this.isVisible(this.linkText(linkText));
  }
}

module.exports = LoginPage;