Feature: On the Form page, a form should be visible with one input box and one submit button

  Scenario: The form should be visible and contain an input box and a submit button 
  Given User is on the Home page
  When User clicks on the Form button
  Then Form page has a visible form
  And One input box
  And One submit button
