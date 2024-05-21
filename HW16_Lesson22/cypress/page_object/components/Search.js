class Search {

  get searchFieldButton(){
    return cy.get('.DocSearch-Button-Placeholder');
  }

  get searchField(){
    return cy.get('.DocSearch-Input');
  }

  get searchResult() {
    return cy.get('#docsearch-item-1');
  }

  clickSearchButton() {
    this.searchFieldButton.click()
  }

  inputSearchField(keyword) {
    this.searchField.type(keyword);
    this.searchResult.should('be.visible').click();
  }
}

module.exports = new Search;
