Feature: When I click on the Home button, I should get navigated to the Home page

  Scenario: Home button is functional on Home page
  Given User is on the Home page
  When User clicks on the Home button
  Then User is navigated to the Home page

  Scenario: Home button is functional on Form page
  Given User is on the Home page
  When User clicks on the Form button
  And User clicks on the Home Button
  Then User is navigated to the Home page
  
