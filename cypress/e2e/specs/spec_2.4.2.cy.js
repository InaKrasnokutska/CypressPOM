import loginPage  from "../pages/login_2.4.2.page";

describe('CHECK SWAG LABS LOG IN WITH POM', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Validate correct user and empty password', () => {
    loginPage.typeUsernameInput('standard_user');
    loginPage.clickLoginButton();
    
    loginPage.elements.getErrorMessage().should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });

  it('Validate correct user and wrong password', () => {
    loginPage.typeUsernameInput('standard_user');
    loginPage.typePasswordInput('wrong_password');
    loginPage.clickLoginButton();
    
    loginPage.elements.getErrorMessage().should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Validate correct user and correct password', () => {
    loginPage.typeUsernameInput('standard_user');
    loginPage.typePasswordInput('secret_sauce');
    loginPage.clickLoginButton();
    
    cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html')
  });

  it('Validate locked out user', () => {
    loginPage.typeUsernameInput('locked_out_user');
    loginPage.typePasswordInput('secret_sauce');
    loginPage.clickLoginButton();
    
    loginPage.elements.getErrorMessage().should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });

});