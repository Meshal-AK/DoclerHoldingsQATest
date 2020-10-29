const { Given, When, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");
const FormPage = require("../../../pageObjects/FormPage");

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

When(/^User types a (.+) on the input field$/, async (s) => {
  const formPage = new FormPage(driver);
  FormInputs = await formPage.getFormInputs();
  await FormInputs[0].sendKeys(s);
});

And("Clicks on the submit button", async () => {
  const formPage = new FormPage(driver);
  GoBTN = await formPage.getGoBTN();
  await GoBTN.click();
});

And(/^Text (.+) should appear$/, async (result) => {
  const formPage = new FormPage(driver);
  InputText = await formPage.getInputText();
  expect(await InputText.getText()).toBe(result);
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/form-submit-functional.feature");
