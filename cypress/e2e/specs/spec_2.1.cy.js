describe('CHECK SWAG LABS LOG IN', () => {
  
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/v1/index.html');
  });

  it('Validate correct user and empty password', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#login-button').click();
    
    cy.get('[data-test = "error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Password is required');
  });

  it('Validate correct user and wrong password', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('wrong_password');
    cy.get('#login-button').click();
    
    cy.get('[data-test = "error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Username and password do not match any user in this service');
  });

  it('Validate correct user and correct password', () => {
    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
    cy.url().should('include', 'https://www.saucedemo.com/v1/inventory.html')
  });

  it('Validate locked out user', () => {
    cy.get('#user-name').type('locked_out_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
    
    cy.get('[data-test = "error"]').should('be.visible')
      .and('contain.text', 'Epic sadface: Sorry, this user has been locked out.');
  });


});