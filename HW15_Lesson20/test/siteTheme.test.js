const { test, expect } = require("@playwright/test");
const Theme = require("../pageObjects/components/Theme");

test.describe("Check site theme changing", () => {
  test("Should change theme on button click", async ({ page }) => {
    const theme = new Theme(page);
    await page.goto("https://playwright.dev/");
    const initialThemeHandle = await theme.getThemeIndicator();
    const initialTheme = await initialThemeHandle.getAttribute('data-theme');
    //console.log("Initial theme:", initialTheme);
    await theme.clickChangeThemeButton();
    await page.waitForTimeout(2000);
    const newThemeHandle = await theme.getThemeIndicator();
    const newTheme = await newThemeHandle.getAttribute('data-theme');
    //console.log("New theme:", newTheme);
    expect(initialTheme).not.toEqual(newTheme);
  });
});
