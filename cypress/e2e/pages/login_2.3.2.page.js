class LoginPage {

    getUsernameInput = function() { return cy.get('#user-name'); }
    getPasswordInput = function() { return cy.get('#password'); }
    getLoginButton   = function() { return cy.get('#login-button'); }
    getErrorMessage  = function() { return cy.get('[data-test = "error"]'); }

    typeUsernameInput(username) {
        this.getUsernameInput().type(username);
    }

    typePasswordInput(password) {
        this.getPasswordInput().type(password);
    }

    clickLoginButton() {
        this.getLoginButton().click();
    }

}


module.exports = new LoginPage();
