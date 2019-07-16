Feature:
  As a user,
  In order to play RPS,
  I need a computer to play against

  Background:
    Given I visit the site

  Scenario: Computer chooses option when user chooses Rock
    When I click the "ROCK" button
    Then I should see "YOU PICKED ROCK AND COMPUTER CHOSE"

  Scenario: Computer chooses option when user chooses Paper
    When I click the "PAPER" button
    Then I should see "YOU PICKED PAPER AND COMPUTER CHOSE"

  Scenario: Computer chooses option when user chooses Scissors
    When I click the "SCISSORS" button
    Then I should see "YOU PICKED SCISSORS AND COMPUTER CHOSE"