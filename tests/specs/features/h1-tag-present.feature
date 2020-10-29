Feature: The following text should be visible on the Home page in <h1> tag Welcome to the Docler Holding QA Department

  Scenario: The text should be visible, present, and correct in an <h1> tag 
  Given User is on the Home page
  And Text is correct
  And  Text is visible
  Then Text is in an h1 tag
