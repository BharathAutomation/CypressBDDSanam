const claimPage = require('../page_elements/claim_page_elements.json');

class claimPageSteps {

    verifyClaimsPageIsLaunched() {
        cy.xpath(claimPage.emp_claims_header).should('be.visible');
        cy.log("Claims Page is Launched Successfully");
    }

    searchClaimsWithEmployeeName(empName, empFullName) {
        cy.xpath(claimPage.employee_name_txtb).type(empName);
        cy.xpath("//div[@role='listbox']//*[contains(text(),'" + empFullName + "')]").should('be.visible').click();
        cy.xpath(claimPage.search_btn).click();
    }

    claimsSearchShouldBeSuccessful(empName){
        cy.xpath(claimPage.results_records, { timeout: 10000 }).should('be.visible');
        cy.xpath(claimPage.emp_name_result).should('have.text',empName);
        cy.log("Claims Page is Launched Successfully");
    }


}

export default new claimPageSteps();