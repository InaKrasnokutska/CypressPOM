class LoginPage {

    elements = {
        
        getUsernameInput : function() { return cy.get('#user-name'); },
        getPasswordInput : function() { return cy.get('#password'); },
        getLoginButton   : function() { return cy.get('#login-button'); },
        getErrorMessage  : function() { return cy.get('[data-test = "error"]'); }
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
