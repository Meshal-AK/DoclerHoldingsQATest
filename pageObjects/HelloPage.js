const webdriver = require("selenium-webdriver");

class HelloPage {
  constructor(driver) {
    this.driver = driver;
  }

  getCompanyLogo() {
    let CompanyLogo = this.driver.findElement(
      webdriver.By.xpath("//img[@id='dh_logo']")
    );
    return CompanyLogo;
  }
}

module.exports = HelloPage;
