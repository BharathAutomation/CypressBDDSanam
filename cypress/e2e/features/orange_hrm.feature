Feature: OrangeHRM Login and Claims Feature
    This feature file includes different scenarios related to OrangeHRM Login and Claims Features

    @smoke
    Scenario: Verify Application Logo And Login Page Header
        Given Launch the application
        Then Verify application logo
        And Verify login page header displayed as "Login"

    @sanity 
    Scenario Outline: Verify Application Login With "<scenario>"
        Given Launch the application
        When I enter "<username>" and "<password>"
        And I click on login button
        Then Login should be successful

        Examples:
            | scenario            | username | password |
            | valid credentials   | Admin    | admin123 |
            # | invalid credentials | Sanam    | Sanam123 |

    # @regression
    # Scenario Outline: Verify Application Claims - Search Claims "<scenario>"
    #     Given Launch the application
    #     When I enter "<username>" and "<password>"
    #     And I click on login button
    #     Then Login should be successful
    #     When User navigated to claims screen
    #     And User search claims with "<user>" and "<fullname>"
    #     Then Claims search should be successful for "<user>"

    #     Examples:
    #         | scenario           | username | password | user           | fullname       |
    #         | with employee name | Admin    | admin123 | Prabin Mainali | Prabin Mainali |