const loginPage = require('../page_elements/login_page_elements.json');

class loginPageSteps {

    verifyApplicationLogo(){
        cy.xpath(loginPage.logo).should('be.visible');
        cy.log("Logo is Successfully Displayed");
    }

    verifyApplicationLoginPageHeader(header){
        cy.xpath(loginPage.login_header).should('have.text', header);
        cy.log("Login Page Header is Successfully Displayed");
    }

    verifyForgotPasswordLink(){
        cy.xpath(loginPage.forgot_login_link).should('be.visible');
        cy.log("Forgot Login Link is Successfully Displayed");
    }

}

export default new loginPageSteps();