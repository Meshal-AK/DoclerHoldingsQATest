const { Given, Then, And, Fusion } = require("jest-cucumber-fusion");
const getDriver = require("../../../resources/base");
const HomePage = require("../../../pageObjects/HomePage");

let driver;

// Landing Page

Given("User is on the Home page", async () => {
  driver = await getDriver();
});

And("Text is correct", async () => {
  const homePage = new HomePage(driver);
  H1Tag = await homePage.getH1Tag();
  expect(await H1Tag.getText()).toContain(
    "Welcome to the Docler Holding QA Department"
  );
});

And("Text is visible", async () => {
  const homePage = new HomePage(driver);
  H1Tag = await homePage.getH1Tag();
  expect(await H1Tag.isDisplayed()).toBeTruthy();
});

Then("Text is in an h1 tag", async () => {
  const homePage = new HomePage(driver);
  H1Tag = await homePage.getH1Tag();
  expect(await H1Tag.getTagName()).toBe("h1");
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/h1-tag-present.feature");
