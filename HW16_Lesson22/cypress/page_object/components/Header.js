class Header {

get DropDownProgrammingLanguage() {
    return cy.get('[href="#"]');
  }

  get JavaButton() {
   return cy.get('[href="/java/"]');
  }
  clickJavaButton(){
    this.DropDownProgrammingLanguage.click();
    this.JavaButton.click({force:true});
  }
}
module.exports = new Header;