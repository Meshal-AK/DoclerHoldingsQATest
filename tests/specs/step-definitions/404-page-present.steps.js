const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");
const ErrorPage = require("../../../pageObjects/ErrorPage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

// Error Button

When("User clicks on the Error button", async () => {
  const homePage = new HomePage(driver);
  ErrorBTN = await homePage.getErrorBTN();
  await ErrorBTN.click();
});

Then("User is navigated to the Error page", async () => {
  expect(await driver.getCurrentUrl()).toContain(
    "http://uitest.duodecadits.com/error"
  );
});

And("Status code is shown as 404", async () => {
  const errorPage = new ErrorPage(driver);
  ErrorCode = await errorPage.getErrorCode();
  expect(await ErrorCode.getText()).toContain("404");
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/404-page-present.feature");
