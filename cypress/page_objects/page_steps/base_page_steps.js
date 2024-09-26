const config = require('../../fixtures/config.json');
const loginPage = require('../page_elements/login_page_elements.json');
const homePage = require('../page_elements/home_page_elements.json');

class basePageSteps{

    launchApplication(){
        cy.viewport(1920, 1080);
        cy.visit(config.url);
        cy.title().should('eq',config.title);
        cy.log("Application is launched successfully")
    }

    enterCredentials(username,password){
        cy.xpath(loginPage.login_header).should('be.visible');
        cy.xpath(loginPage.username_Txtb).type(username);
        cy.xpath(loginPage.password_Txtb).type(password);      
    }

    clickOnLoginButton(){
        cy.xpath(loginPage.login_btn).click();
    }
    

    data(test_name){
        return cy.fixture('testdata.json').then((test_data) =>{  // reading fixture ==> get testdata.json file ==> test_data will have all objects ==>
            const testcase = test_data.find(test => test.testname === test_name); //match the test case im looking for with json file objects
            return testcase.data; // return the data from matching test case
        })
    }

}

export default new basePageSteps();