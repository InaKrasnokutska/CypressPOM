class LoginPage {
        
    get usernameInput()     { return cy.get('#user-name'); }
    get passwordInput()     { return cy.get('#password'); }
    get loginButton()       { return cy.get('#login-button'); }
    get errorMessage()      { return cy.get('[data-test = "error"]'); }

    typeUsernameInput(username) {
        this.usernameInput.type(username);
    }

    typePasswordInput(password) {
        this.passwordInput.type(password);
    }

    clickLoginButton() {
        this.loginButton.click();
    }

}


module.exports = new LoginPage();
