const { Given, When, Then, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

// Home button

When("User clicks on the UI Testing button", async () => {
  const homePage = new HomePage(driver);
  UITestingBTN = await homePage.getUITestingBTN();
  await UITestingBTN.click();
});

Then("User is navigated to the Home page", async () => {
  expect(await driver.getCurrentUrl()).toContain(process.env.URL);
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/ui-testing-button-functional.feature");
