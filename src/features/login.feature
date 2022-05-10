Feature: Account

@AdactInHotel @working
Scenario: To verify valid login details TC-101

Given I navigate to AdactIn
Then I enter username <username>
Then I enter password <password>
Then I click login button
Then I verify user is logged in

Examples:
    | username  |password  |
    | thobekani |qwertyuiop|