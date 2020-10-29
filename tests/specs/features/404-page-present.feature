Feature: When I click on the Error button, I should get a 404 HTTP response code

  Scenario: Error button should give a 404 page
  Given User is on the Home page
  When User clicks on the Error button
  Then User is navigated to the Error page
  And Status code is shown as 404
  
