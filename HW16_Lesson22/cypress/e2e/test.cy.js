const header = require("../page_object/components/Header");
const search = require("../page_object/components/Search");
const theme = require("../page_object/components/Theme");

describe("Test Playwright website", () => {
  it("Java link from language drop-down redirect to Java page", () => {
    cy.visit("https://playwright.dev/");
    header.clickJavaButton(); // Используем метод из класса Header для нажатия на кнопку Java
    cy.url().should("eq", "https://playwright.dev/java/");
  });

  it("Search with keyword 'browsers install'. Search result can be opened", () => {
    cy.visit("https://playwright.dev/");
    search.clickSearchButton();
    search.inputSearchField("browsers install");
    cy.url().should("include", "https://playwright.dev/docs/browsers");
  });

  it("Website theme can be changed by clicking on the Theme button", () => {
    cy.visit("https://playwright.dev/");
    theme.ThemeIndicator.invoke('attr', 'data-theme').then((initialTheme) => {
      theme.clickChangeThemeButton();
      theme.ThemeIndicator.invoke('attr', 'data-theme').then((newTheme) => {
        expect(initialTheme).not.to.equal(newTheme);
      });
    });
  });
});
