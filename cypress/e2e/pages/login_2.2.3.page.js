class LoginPage {

    usernameInputSelector = '#user-name';
    passwordInputSelector = '#password';
    loginButtonSelector   = '#login-button';
    errorMessageSelector  = '[data-test = "error"]';

    getUsernameInput() {
        return cy.get(this.usernameInputSelector);
    }

    getPasswordInput() {
        return cy.get(this.passwordInputSelector);
    }

    getLoginButton() {
        return cy.get(this.loginButtonSelector);
    }

    getErrorMessage() {
        return cy.get(this.errorMessageSelector);
    }

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
