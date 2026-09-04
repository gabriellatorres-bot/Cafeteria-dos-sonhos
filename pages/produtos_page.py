from selenium.webdriver.common.by import By


class ProdutosPage:

    def __init__(self, driver):
        self.driver = driver

    def adicionar_bolo(self):

        self.driver.find_element(
            By.ID, "bolo"
        ).click()

    def abrir_carrinho(self):

        self.driver.find_element(
            By.ID, "carrinho-btn"
        ).click()
