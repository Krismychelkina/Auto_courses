const { Locator } = require("playwright");

class Theme {
  constructor(page) {
    this.page = page;
    this.themeToggleButton = 'div.toggle_vylO.colorModeToggle_DEke';
    this.themeIndicator = '//*[@data-theme]';
  }

  async getThemeToggleButton() {
    return await this.page.locator(this.themeToggleButton);
  }

  async getThemeIndicator() {
    return await this.page.locator(this.themeIndicator);
  }

  async clickChangeThemeButton() {
    const button = await this.getThemeToggleButton();
    await button.click();
  }
}

module.exports = Theme;
