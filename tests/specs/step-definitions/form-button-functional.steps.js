const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

// Form Button

When("User clicks on the Form button", async () => {
  const homePage = new HomePage(driver);
  FormBTN = await homePage.getFormBTN();
  await FormBTN.click();
});

Then("User is navigated to the Form page", async () => {
  expect(await driver.getCurrentUrl()).toContain(
    "http://uitest.duodecadits.com/form.html"
  );
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/form-button-functional.feature");
