const { test, expect } = require("@playwright/test");
const Search = require("../pageobjects/components/Search");

test.describe("Search field", () => {
  test("Search result should open browser page", async ({ page }) => {
    const search = new Search(page);
    await page.goto("https://playwright.dev/");
    await search.clickSearchButton();
    await search.inputSearchField("browser");
    await page.waitForTimeout(2000);
    expect(page.url()).toEqual("https://playwright.dev/docs/browsers#install-browsers");
  });
});
