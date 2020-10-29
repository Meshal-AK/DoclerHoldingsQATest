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
  PTag = await homePage.getPTag();
  expect(await PTag.getText()).toBe(
    "This site is dedicated to perform some exercises and demonstrate automated web testing."
  );
});

And("Text is visible", async () => {
  const homePage = new HomePage(driver);
  PTag = await homePage.getPTag();
  expect(await PTag.isDisplayed()).toBeTruthy();
});

Then("Text is in an p tag", async () => {
  const homePage = new HomePage(driver);
  PTag = await homePage.getPTag();
  expect(await PTag.getTagName()).toBe("p");
});

afterEach(async () => {
  driver.close();
  driver = null;
});

Fusion("../features/p-tag-present.feature");
