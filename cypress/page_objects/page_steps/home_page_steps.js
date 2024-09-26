const homePage = require('../page_elements/home_page_elements.json');
const logiPage = require('../page_elements/login_page_elements.json');

class homePageSteps{

    verifyHomePageMenus(){
        cy.xpath(homePage.admin_menu).should('be.visible');
        cy.xpath(homePage.pim_menu).should('be.visible');
        cy.xpath(homePage.leave_menu).should('be.visible');
        cy.xpath(homePage.time_menu).should('be.visible');
        cy.xpath(homePage.recruitment_menu).should('be.visible');
        cy.xpath(homePage.my_info_menu).should('be.visible');
        cy.xpath(homePage.performance_menu).should('be.visible');
        cy.xpath(homePage.dashboard_menu).should('be.visible');
        cy.xpath(homePage.directory_menu).should('be.visible');
        cy.xpath(homePage.maintenance_menu).should('be.visible');
        cy.xpath(homePage.claim_menu).should('be.visible');
        cy.xpath(homePage.buzz_menu).should('be.visible');
        cy.log("Application Menus are Successfully Displayed with in the Home Page")
    }

    logoutFromApplication(){
        cy.xpath(homePage.profile_pic).should('be.visible');
        cy.xpath(homePage.profile_pic).click();
        cy.xpath(homePage.logout).should('be.visible');
        cy.xpath(homePage.logout).click();
        cy.wait(2000);
        cy.xpath(logiPage.login_header).should('be.visible');
        cy.log("Application Logout is Successful");
    }

    navigateToClaimsPage(){
        cy.xpath(homePage.claim_menu).click();
        cy.log("Navigated to Claims Page");
    }

    verifyLoginSuccessful(){
        cy.xpath(homePage.dashboard_header).should('be.visible');
        cy.log("Application Login is Successful")
    }
}

export default new homePageSteps();