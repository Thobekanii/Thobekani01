Feature: Verify Check out functionality

  @AdactInHotel @working
  Scenario Outline: To verify whether the check-out date field accepts a later date than checkin date. TC-102
    Given I navigate to AdactIn
    Then I enter username <username>
    Then I enter password <password>
    Then I click login button
    Then I select location <location>
    Then I select hotel <hotel>
    Then I select room type <roomType>
    Then I select number of rooms <numberOfRooms>
    #Then I enter check in date <check-in-date>

    Examples: 
      | username  | password | location | hotel       | roomType | numberOfRooms | check-in-date | check-out-date |
      | thobekani |   254500 | Sydney   | Hotel Creek | Standard |             1 |             7 |              5 |
