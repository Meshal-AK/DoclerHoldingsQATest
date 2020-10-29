Feature: The Title should be "UI Testing Site" on every site

  Scenario: Correct page title on the Home page
  Given User is on the Home page
  Then Home page has the correct page title

  Scenario: Correct page title on the Home page again
  Given User is on the Home page
  When User clicks on the UI Testing button
  Then Home page has the correct page title

  Scenario: Correct page title on the UI Testing page
  Given User is on the Home page
  When User clicks on the UI Testing button
  Then UI Testing page has the correct page title

  Scenario: Correct page title on the Form page
  Given User is on the Home page
  When User clicks on the Form button
  Then Form page has the correct page title

  Scenario: Correct page title on the Error page
  Given User is on the Home page
  When User clicks on the Error button
  Then Error page has the correct page title

  Scenario: Correct page title on the Hello page
  Given User is on the Home page
  When User clicks on the Form button
  And User clicks on the Go! button
  Then Hello page has the correct page title