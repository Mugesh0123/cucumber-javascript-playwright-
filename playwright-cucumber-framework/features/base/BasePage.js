class BasePage {
  constructor(page) {
    this.page = page;
  }

  async navigate(url) {
    await this.page.goto(url, { waitUntil: 'networkidle' }); // Wait for the network to be idle
  }

  async click(selector) {
    await this.page.click(selector);
  }

  async type(selector, text) {
    await this.page.fill(selector, text);
  }

  async isVisible(selector) {
    return await this.page.isVisible(selector);
  }

  async getText(selector) {
    return await this.page.textContent(selector);
  }
  

  
}

module.exports = BasePage;