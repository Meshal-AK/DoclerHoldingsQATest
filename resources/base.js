const webdriver = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());

getDriver = async () => {
  var driver = new webdriver.Builder().forBrowser("chrome").build();

  await driver.manage().setTimeouts({ implicit: 10000 });
  await driver.manage().window().maximize();
  await driver.get(process.env.URL);
  return driver;
};

module.exports = getDriver;
