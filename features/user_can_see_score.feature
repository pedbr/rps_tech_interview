Feature:
  As a user,
  In order to keep track of the game,
  I need to see the total score of all the games played

  Scenario: User can see score board
    Given I visit the site
    Then I should see "SCORE"
    And I should see "YOU"
    And I should see "COMPUTER"