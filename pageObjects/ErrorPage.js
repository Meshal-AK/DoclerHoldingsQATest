const webdriver = require("selenium-webdriver");

class ErrorPage {
  constructor(driver) {
    this.driver = driver;
  }

  getCompanyLogo() {
    let CompanyLogo = this.driver.findElement(
      webdriver.By.xpath(
        "//img[contains(@src,'assets/img/dh_company_lux_doclerholding.jpg')]"
      )
    );
    return CompanyLogo;
  }

  getErrorCode() {
    let ErrorCode = this.driver.findElement(
      webdriver.By.xpath("//h1[contains(text(),'404')]")
    );
    return ErrorCode;
  }
}

module.exports = ErrorPage;
