class LoginPage {

    elements = {
        getUsernameInput : () => cy.get('#user-name'),
        getPasswordInput : () => cy.get('#password'),
        getLoginButton   : () => cy.get('#login-button'),
        getErrorMessage  : () => cy.get('[data-test = "error"]')
    }

    typeUsernameInput(username) {
        this.elements.getUsernameInput().type(username);
    }

    typePasswordInput(password) {
        this.elements.getPasswordInput().type(password);
    }

    clickLoginButton() {
        this.elements.getLoginButton().click();
    }

}


module.exports = new LoginPage();
