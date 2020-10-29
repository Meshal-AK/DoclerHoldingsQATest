const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");
const FormPage = require("../../../pageObjects/FormPage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

Then(/(page has the correct page title)$/, async () => {
  expect(await driver.getTitle()).toBe("UI Testing Site");
});

// UI Testing button

When("User clicks on the UI Testing button", async () => {
  const homePage = new HomePage(driver);
  UITestingBTN = await homePage.getUITestingBTN();
  await UITestingBTN.click();
});

// Home button

When("User clicks on the Home button", async () => {
  const homePage = new HomePage(driver);
  HomeBTN = await homePage.getHomeBTN();
  await HomeBTN.click();
});

// Form Button

When("User clicks on the Form button", async () => {
  const homePage = new HomePage(driver);
  FormBTN = await homePage.getFormBTN();
  await FormBTN.click();
});

// Error Button

When("User clicks on the Error button", async () => {
  const homePage = new HomePage(driver);
  ErrorBTN = await homePage.getErrorBTN();
  await ErrorBTN.click();
});

// // Go! Button

And("User clicks on the Go! button", async () => {
  const formPage = new FormPage(driver);
  GoBTN = await formPage.getGoBTN();
  await GoBTN.click();
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/page-title-present.feature");
