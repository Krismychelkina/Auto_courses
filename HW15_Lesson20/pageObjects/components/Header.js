class Header {
  constructor(page) {
    this.page = page;
    this.programmingLanguageButtonLocator = '//a[@href="#"]';
    this.javaButtonLocator = '//a[@href="/java/"]';
  }

  async clickLanguageButton() {
    const programmingLanguageButtonLocator = this.page.locator(this.programmingLanguageButtonLocator);
    await programmingLanguageButtonLocator.click();
  }

  async clickJavaButton() {
    const javaButtonLocator = this.page.locator(this.javaButtonLocator);
    await javaButtonLocator.click();
  }
}

module.exports = Header;
