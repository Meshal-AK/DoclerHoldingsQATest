const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");
const FormPage = require("../../../pageObjects/FormPage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

// Home button

When("User clicks on the Home button", async () => {
  const homePage = new HomePage(driver);
  HomeBTN = await homePage.getHomeBTN();
  await HomeBTN.click();
});

And("User clicks on the Home Button", async () => {
  const formPage = new FormPage(driver);
  HomeBTN = await formPage.getHomeBTN();
  await HomeBTN.click();
});

// Form Button

When("User clicks on the Form button", async () => {
  const homePage = new HomePage(driver);
  FormBTN = await homePage.getFormBTN();
  await FormBTN.click();
});

Then("User is navigated to the Home page", async () => {
  expect(await driver.getCurrentUrl()).toContain(process.env.URL);
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/home-button-functional.feature");
