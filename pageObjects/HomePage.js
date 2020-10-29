const webdriver = require("selenium-webdriver");

class HomePage {
  constructor(driver) {
    this.driver = driver;
  }

  getUITestingBTN() {
    let UITestingBTN = this.driver.findElement(
      webdriver.By.xpath("//*[@id='site']")
    );
    return UITestingBTN;
  }

  getHomeBTN() {
    let HomeBTN = this.driver.findElement(
      webdriver.By.xpath("//a[@id='home']")
    );
    return HomeBTN;
  }

  getHomeBTNStatus() {
    let HomeBTN = this.driver.findElement(
      webdriver.By.xpath("//a[@id='home']/parent::li")
    );
    return HomeBTN;
  }

  getFormBTN() {
    let FormBTN = this.driver.findElement(
      webdriver.By.xpath("//a[@id='form']")
    );
    return FormBTN;
  }

  getFormBTNStatus() {
    let FormBTNStatus = this.driver.findElement(
      webdriver.By.xpath("//a[@id='form']/parent::li")
    );
    return FormBTNStatus;
  }

  getErrorBTN() {
    let ErrorBTN = this.driver.findElement(
      webdriver.By.xpath("//a[@id='error']")
    );
    return ErrorBTN;
  }

  getCompanyLogo() {
    let CompanyLogo = this.driver.findElement(
      webdriver.By.xpath("//img[@id='dh_logo']")
    );
    return CompanyLogo;
  }

  getH1Tag() {
    let H1Tag = this.driver.findElement(
      webdriver.By.xpath("//div[@class='ui-test']/h1")
    );
    return H1Tag;
  }

  getPTag() {
    let PTag = this.driver.findElement(
      webdriver.By.xpath("//p[@class='lead']")
    );
    return PTag;
  }
}

module.exports = HomePage;
