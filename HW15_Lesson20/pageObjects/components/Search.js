class Search {
  constructor(page) {
    this.page = page;
    this.searchButton = '//span[@class="DocSearch-Button-Placeholder"]';
    this.searchField = '//input[@class="DocSearch-Input"]';

    this.searchResultItem = '//li[@id="docsearch-item-1"]'; // id первого элемента в результате поиска
  }

  async clickSearchButton() {
    await this.page.click(this.searchButton);
  }

  async inputSearchField(keyword) {
    await this.page.fill(this.searchField, keyword);
   // await this.page.press(this.searchField, 'Enter');
    await this.page.waitForSelector(this.searchResultItem); // Ожидание появления первого элемента в результате поиска
    const searchResult = await this.page.$(this.searchResultItem); // Нахождение первого элемента в результате поиска
    if (searchResult) {
      await searchResult.click(); // Клик на первом элементе в результате поиска
    } else {
      throw new Error('Search result item not found');
    }
  }
}

module.exports = Search;