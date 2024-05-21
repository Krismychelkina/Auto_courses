class Theme {

  get ChangeThemeButton() {
    return cy.get('div.toggle_vylO.colorModeToggle_DEke');
  }

  get ThemeIndicator() {
    return cy.get('[data-theme]');
  }

  clickChangeThemeButton() {
    this.ChangeThemeButton.click();
  }
}

module.exports = new Theme;