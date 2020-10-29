const webdriver = require("selenium-webdriver");

class FormPage {
  constructor(driver) {
    this.driver = driver;
  }

  getGoBTN() {
    let GoBTN = this.driver.findElement(
      webdriver.By.xpath("//button[@id='hello-submit']")
    );
    return GoBTN;
  }

  getHomeBTNStatus() {
    let HomeBTN = this.driver.findElement(
      webdriver.By.xpath("//a[@id='home']/parent::li")
    );
    return HomeBTN;
  }

  getCompanyLogo() {
    let CompanyLogo = this.driver.findElement(
      webdriver.By.xpath("//img[@id='dh_logo']")
    );
    return CompanyLogo;
  }

  getHomeBTN() {
    let HomeBTN = this.driver.findElement(
      webdriver.By.xpath("//a[@id='home']")
    );
    return HomeBTN;
  }

  getFormBTNStatus() {
    let FormBTNStatus = this.driver.findElement(
      webdriver.By.xpath("//a[@id='form']/parent::li")
    );
    return FormBTNStatus;
  }

  getForm() {
    let Form = this.driver.findElement(
      webdriver.By.xpath("//form[@id='hello-form']")
    );
    return Form;
  }

  getInputText() {
    let InputText = this.driver.findElement(
      webdriver.By.xpath("//h1[@id='hello-text']")
    );
    return InputText;
  }

  async getFormInputs() {
    let Form = await this.getForm();
    let FormInputs = Form.findElements(webdriver.By.xpath("//input"));
    return FormInputs;
  }

  async getFormSearchBTNs() {
    let Form = await this.getForm();
    let FormSearchBTN = Form.findElements(webdriver.By.xpath("//button"));
    return FormSearchBTN;
  }
}

module.exports = FormPage;
