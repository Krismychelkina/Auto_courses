const { test, expect, Locator } = require("@playwright/test");
const Header = require("../pageObjects/components/Header");

test.describe("Choose programming language", () => {
  test("Should redirect to Java page", async ({ page }) => {
    const header = new Header(page);
    await page.goto("https://playwright.dev/");
    await header.clickLanguageButton();
    await page.waitForTimeout(2000);
    await header.clickJavaButton();
    expect(page.url()).toEqual("https://playwright.dev/java/");
  });
});