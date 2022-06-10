Feature: Verify Check out functionality

@AdactInHotel @working
Scenario Outline: To verify whether the check-out date field accepts a later date than checkin date. TC-102

Given I navigate to AdactIn
Then I enter username <username>
Then I enter password <password>
Then I click login button
Then I verify user is logged in

Examples:
    | username  |password|
    | thobekani |254500  |