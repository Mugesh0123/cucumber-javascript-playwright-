Feature: User Login

  Scenario: Valid user logs into Demo Web Shop
    Given I open "https://demowebshop.tricentis.com"
    When I click the "Log in" link
    And I enter "test1@tes.com" into the "Email" field
    And I enter "test1@tes.com" into the "Password" field
    And I click the "Log in" button
    Then I should see the "Log out" link
