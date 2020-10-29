Feature: When I click on the Home button, it should turn to active status

  Scenario: Home button has active status on Home page
  Given User is on the Home page
  When User clicks on the Home button
  Then Home button has active status

  Scenario: Home button doesn't have active status on Form page
  Given User is on the Home page
  When User clicks on the Form button
  Then Home button doesn't have active status
  
