Feature: When I click on the Form button, it should turn to active status

  Scenario: Form button has active status on Form page
  Given User is on the Home page
  When User clicks on the Form button
  Then Form button has active status

  Scenario: Form button doesn't have active status on Form page
  Given User is on the Home page
  Then Form button doesn't have active status
  
