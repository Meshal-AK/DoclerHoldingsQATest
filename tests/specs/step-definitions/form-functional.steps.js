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

Then("Form page has a visible form", async () => {
  const formPage = new FormPage(driver);
  Form = await formPage.getForm();
  expect(await Form.isDisplayed()).toBeTruthy();
});

And("One input box", async () => {
  const formPage = new FormPage(driver);
  FormInputs = await formPage.getFormInputs();
  expect(FormInputs.length).toBe(1);
});

And("One submit button", async () => {
  const formPage = new FormPage(driver);
  FormSearchBTNs = await formPage.getFormSearchBTNs();
  expect(FormInputs.length).toBe(1);
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/form-functional.feature");
