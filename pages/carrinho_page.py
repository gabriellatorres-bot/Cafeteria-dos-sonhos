from selenium.webdriver.common.by import By


class CarrinhoPage:

    def __init__(self, driver):
        self.driver = driver

    def quantidade(self):

        return self.driver.find_element(
            By.ID, "qtd"
        ).text

    def checkout(self):

        self.driver.find_element(
            By.ID, "checkout"
        ).click()
