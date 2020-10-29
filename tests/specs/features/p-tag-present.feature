Feature: The following text should be visible on the Home page in <p> tag:
"This site is dedicated to perform some exercises and demonstrate automated web testing."

  Scenario: The text should be visible, present, and correct in an <p> tag 
  Given User is on the Home page
  And Text is correct
  And Text is visible
  Then Text is in an p tag
