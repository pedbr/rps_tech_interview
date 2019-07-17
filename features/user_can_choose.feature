Feature:
  As a user,
  In order to play RPS,
  I need to be able to choose rock, paper or scissors.

  Background:
    Given I visit the site

  Scenario: User can choose Rock
    When I click the "ROCK" button
    Then I should see "YOU CHOSE"
    And I should see "ROCK"

  Scenario: User can choose Paper
    When I click the "PAPER" button
    Then I should see "YOU CHOSE"
    And I should see "PAPER"

  Scenario: User can choose Scissors
    When I click the "SCISSORS" button
    Then I should see "YOU CHOSE"
    And I should see "SCISSORS"
    