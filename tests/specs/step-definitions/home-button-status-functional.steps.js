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

// Form Button

When("User clicks on the Form button", async () => {
  const homePage = new HomePage(driver);
  FormBTN = await homePage.getFormBTN();
  await FormBTN.click();
});

Then("Home button has active status", async () => {
  const homePage = new HomePage(driver);
  HomeBTNStatus = await homePage.getHomeBTNStatus();
  expect(await HomeBTNStatus.getAttribute("class")).toContain("active");
});

Then("Home button doesn't have active status", async () => {
  const formPage = new FormPage(driver);
  HomeBTNStatus = await formPage.getHomeBTNStatus();
  expect(await HomeBTNStatus.getAttribute("class")).toContain("");
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/home-button-status-functional.feature");
