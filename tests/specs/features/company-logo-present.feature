Feature: The Company Logo should be visible on every site

  Scenario: Company logo is visible on the Home page
  Given User is on the Home page
  Then Home page has the Company logo

  Scenario: Company logo is visible on the Home page again
  Given User is on the Home page
  When User clicks on the UI Testing button
  Then Home page has the Company logo

  Scenario: Company logo is visible on the UI Testing page
  Given User is on the Home page
  When User clicks on the UI Testing button
  Then UI Testing page has the Company logo

  Scenario: Company logo is visible on the Form page
  Given User is on the Home page
  When User clicks on the Form button
  Then Form page has the Company logo

  # Scenario: Company logo is visible on the Error page
  # Given User is on the Home page
  # When User clicks on the Error button
  # Then Error page has the Company logo

  Scenario: Company logo is visible on the Hello page
  Given User is on the Home page
  When User clicks on the Form button
  And User clicks on the Go! button
  Then Hello page has the Company logo