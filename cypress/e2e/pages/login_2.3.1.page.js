class LoginPage {

    getUsernameInput() { return cy.get('#user-name'); }
    getPasswordInput() { return cy.get('#password'); }
    getLoginButton  () { return cy.get('#login-button'); }
    getErrorMessage () { return cy.get('[data-test = "error"]'); }

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
