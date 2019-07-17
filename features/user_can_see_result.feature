Feature:
  As a user,
  In order to know if I won
  I need to see the game's result

  Background:
    Given I visit the site

  Scenario: Result shows when user picks Rock
    When I click the "ROCK" button
    Then I should see "!"

  Scenario: Result shows when user picks Paper
    When I click the "PAPER" button
    Then I should see "!"

  Scenario: Result shows when user picks Scissors
    When I click the "SCISSORS" button
    Then I should see "!"