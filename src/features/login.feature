Feature: Account

@AdactInHotel @working
Scenario Outline: To verify valid login details TC-101

Given I navigate to AdactIn
Then I enter username <username>
Then I enter password <password>
Then I click login button
Then I verify user is logged in

Examples:
    | username  |password|
    | thobekani |254500  |


@AdactInHotel @working
Scenario Outline: To verify text box error messages TC-101-1

Given I navigate to AdactIn
Then I click login button
Then I verify username error
Then I enter username <username>
Then I click login button
Then I verify password error

Examples:
    | username  |
    | thobekani |

@AdactInHotel @working
Scenario Outline: Verify invalid login details TC-101-2

Given I navigate to AdactIn
Then I enter username <username>
Then I enter password <password>
Then I click login button
Then I verify invalid login error

Examples:
    | username |password  |
    | thobekani|qwertyuiop|