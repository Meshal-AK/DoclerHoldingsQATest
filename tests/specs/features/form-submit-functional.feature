Feature: On the Form page, if you type <value> the input field and submit the form, you should get redirect to the Hello page, and the following text should appear <result>

  Scenario Outline: The input field should work with any value 
  Given User is on the Home page
  When User clicks on the Form button
  When User types a <value> on the input field
  And Clicks on the submit button
  And Text <result> should appear

Examples: 
|value |result |
|John |Hello John! |
|Sophia |Hello Sophia! |
|Charlie |Hello Charlie! |
|Emily |Hello Emily! |