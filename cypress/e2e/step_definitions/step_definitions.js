import basepage from '../../page_objects/page_steps/base_page_steps';
import loginpage from '../../page_objects/page_steps/login_page_steps';
import homepage from '../../page_objects/page_steps/home_page_steps';
import claimspage from '../../page_objects/page_steps/claim_page_steps';

import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('Launch the application', () => {
    basepage.launchApplication();
})

Then('Verify application logo', () => {
    loginpage.verifyApplicationLogo();
})

Then('Verify login page header displayed as {string}', (expected_header) => {
    loginpage.verifyApplicationLoginPageHeader(expected_header);
})

When('I enter {string} and {string}', (username, password) => {
    basepage.enterCredentials(username, password);
})

When('I click on login button', () => {
    basepage.clickOnLoginButton();
})

Then('Login should be successful', () => {
   homepage.verifyLoginSuccessful();
})

When('User navigated to claims screen', () => {
    homepage.navigateToClaimsPage();
    claimspage.verifyClaimsPageIsLaunched();
})

When('User search claims with {string} and {string}', (user, fullname) => {
    claimspage.searchClaimsWithEmployeeName(user,fullname);
    claimspage.claimsSearchShouldBeSuccessful(user);
 })

 
When('Claims search should be successful for {string}', (user) => {
    claimspage.claimsSearchShouldBeSuccessful(user);
})