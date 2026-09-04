from selenium.webdriver.common.by import By


class CheckoutPage:

    def __init__(self, driver):
        self.driver = driver

    def preencher(self):

        self.driver.find_element(
            By.ID, "nome"
        ).send_keys("Maria")

        self.driver.find_element(
            By.ID, "endereco"
        ).send_keys("Rua das Flores, 100")

        self.driver.find_element(
            By.ID, "telefone"
        ).send_keys("71999999999")

    def finalizar(self):

        self.driver.find_element(
            By.ID, "finalizar-btn"
        ).click()

    def mensagem(self):

        return self.driver.find_element(
            By.ID, "mensagem"
        ).text
