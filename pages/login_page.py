from selenium.webdriver.common.by import By


class LoginPage:

    def __init__(self, driver):
        self.driver = driver

    def acessar(self, url):
        self.driver.get(url)

    def login(self, usuario, senha):

        self.driver.find_element(
            By.ID, "usuario"
        ).send_keys(usuario)

        self.driver.find_element(
            By.ID, "senha"
        ).send_keys(senha)

        self.driver.find_element(
            By.ID, "login-btn"
        ).click()
