class LoginPage {

    usernameInputSelector = '#user-name';
    passwordInputSelector = '#password';
    loginButtonSelector   = '#login-button';
    errorMessageSelector  = '[data-test = "error"]';

    typeUsernameInput(username) {
        cy.get(this.usernameInputSelector).type(username);
    }

    typePasswordInput(password) {
        cy.get(this.passwordInputSelector).type(password);
    }

    clickLoginButton() {
        cy.get(this.loginButtonSelector).click();
    }

    checkErrorMessage(message) {
        cy.get(this.errorMessageSelector).should('be.visible').and('contain.text', message);
    }

}


module.exports = new LoginPage();
