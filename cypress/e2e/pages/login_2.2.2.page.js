class LoginPage {

    usernameInputSelector = '#user-name';
    passwordInputSelector = '#password';
    loginButtonSelector   = '#login-button';
    errorMessageSelector  = '[data-test = "error"]';

    getErrorMessage() {
        return cy.get(this.errorMessageSelector);
    }

    typeUsernameInput(username) {
        cy.get(this.usernameInputSelector).type(username);
    }

    typePasswordInput(password) {
        cy.get(this.passwordInputSelector).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButtonSelector).click();
    }

}


module.exports = new LoginPage();
