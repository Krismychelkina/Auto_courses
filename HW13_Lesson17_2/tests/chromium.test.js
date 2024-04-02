const { Builder, By, Key, until } = require('selenium-webdriver');
const chai = require('chai');
const assert = chai.assert;

describe.only("chromedriver.chromium.org tests", function () {
  let driver;

  before(async function() {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get("https://chromedriver.chromium.org/home");
  });

  after(async function() {
    await driver.quit();
  });

  const checkPageTitle = async (expectedTitle) => {
    const title = await driver.getTitle();
    assert.equal(title, expectedTitle);
  };

  const checkElementText = async (element, expectedText) => {
    const elementText = await driver.findElement(By.xpath(element)).getText();
    console.log(elementText, expectedText);
    assert.equal(elementText, expectedText);
  };

  it('Test 1 - Check main title on chromedriver website', async () => {
    await checkPageTitle("ChromeDriver - WebDriver for Chrome");
    await checkElementText("//h1/span", "ChromeDriver");
  });

  it('Test 2 - Click on "Chrome Extensions" link and check the new title', async () =>{
    const dropdown = await driver.findElement(By.css('.oXBWEc > .PsKE7e [jscontroller="yUHiM"]'));
    const extensionsLink = await driver.findElement(By.xpath('//*[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[text()="Chrome Extensions"]'));
    await driver.actions().click(dropdown).perform();
    await driver.actions().click(extensionsLink).perform();
    await driver.wait(until.urlContains("/extensions"), 10000);
    await checkPageTitle("ChromeDriver - WebDriver for Chrome - Chrome Extensions");
    const title = await driver.findElement(By.css(".jXK9ad-SmKAyb .Rn3Z1b"));
    await driver.executeScript("arguments[0].style.backgroundColor = 'yellow'", title);
    await driver.sleep(2000);
  });

  it('Test 3 - Search for "driver" and check the first link', async () => {
    await checkElementText("//h1/span", "Chrome Extensions");
    await driver.get("https://chromedriver.chromium.org/_/search");
    const searchField = await driver.findElement(By.css('[type="search"]'));
    await searchField.sendKeys("driver", Key.ENTER);
    await driver.sleep(1000);
    const firstResult = await driver.findElement(By.xpath('//*[@class="lZsZxe"]//a[1]'));
    const link = await firstResult.getAttribute("href");
    assert.isTrue(link.includes("driver"));
  });

  it('Test 4 - Click on "More" and then "Mobile Emulation", and check the URL', async () => {
    await driver.get("https://chromedriver.chromium.org/");
    const moreTab = await driver.findElement(By.xpath("//*[text()='More']"));
    await driver.actions().move({ origin: moreTab }).perform();
    const mobileEmulationLink = await driver.findElement(By.xpath("//li[@class='ijMPi']//div[@class='I35ICb']//a[text()=\"Mobile Emulation\"]"));
    await mobileEmulationLink.click();
    await driver.wait(until.urlContains("/mobile-emulation"), 15000);
  });
});