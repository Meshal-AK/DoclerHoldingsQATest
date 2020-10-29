const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");
const FormPage = require("../../../pageObjects/FormPage");
const ErrorPage = require("../../../pageObjects/ErrorPage");
const HelloPage = require("../../../pageObjects/HelloPage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

Then("Home page has the Company logo", async () => {
  const homePage = new HomePage(driver);
  CompanyLogo = await homePage.getCompanyLogo();
  expect(await CompanyLogo.isDisplayed()).toBeTruthy();
});

// UI Testing button

When("User clicks on the UI Testing button", async () => {
  const homePage = new HomePage(driver);
  UITestingBTN = await homePage.getUITestingBTN();
  await UITestingBTN.click();
});

Then("UI Testing page has the Company logo", async () => {
  const homePage = new HomePage(driver);
  CompanyLogo = await homePage.getCompanyLogo();
  expect(await CompanyLogo.isDisplayed()).toBeTruthy();
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

Then("Form page has the Company logo", async () => {
  const formPage = new FormPage(driver);
  CompanyLogo = await formPage.getCompanyLogo();
  expect(await CompanyLogo.isDisplayed()).toBeTruthy();
});

// Error Button

// Unneccessary to test

// When("User clicks on the Error button", async () => {
//   const homePage = new HomePage(driver);
//   ErrorBTN = await homePage.getErrorBTN();
//   await ErrorBTN.click();
// });

// Then("Error page has the Company logo", async () => {
//   const errorPage = new ErrorPage(driver);
//   try {
//     CompanyLogo = await errorPage.getCompanyLogo();
//     expect(await CompanyLogo.isDisplayed()).toBeTruthy();
//   } catch (error) {
//     CompanyLogo = false;
//     expect(CompanyLogo).toBeTruthy();
//   }
// });

// Go! Button

And("User clicks on the Go! button", async () => {
  const formPage = new FormPage(driver);
  GoBTN = await formPage.getGoBTN();
  await GoBTN.click();
});

Then("Hello page has the Company logo", async () => {
  const helloPage = new HelloPage(driver);
  CompanyLogo = await helloPage.getCompanyLogo();
  expect(await CompanyLogo.isDisplayed()).toBeTruthy();
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/company-logo-present.feature");
