@CreateState
Feature: System should allow to create states info using api end point
  Scenario: create a state
    Given user sets the response using api end point "https://www.gmibank.com/api/tp-states" and creates state
    Then user reads all states from end point "https://www.gmibank.com/api/tp-states"
    Then user asserts for new state

