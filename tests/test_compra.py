from pages.login_page import LoginPage
from pages.produtos_page import ProdutosPage
from pages.carrinho_page import CarrinhoPage
from pages.checkout_page import CheckoutPage


def test_compra(driver):

    # LOGIN

    login = LoginPage(driver)

    login.acessar(
        "file:///C:/CAMINHO/confeitaria-selenium/site/index.html"
    )

    login.login(
        "admin",
        "1234"
    )


    # PRODUTO

    produtos = ProdutosPage(driver)

    produtos.adicionar_bolo()

    produtos.abrir_carrinho()


    # CARRINHO

    carrinho = CarrinhoPage(driver)

    assert carrinho.quantidade() == "1"

    carrinho.checkout()


    # CHECKOUT

    checkout = CheckoutPage(driver)

    checkout.preencher()

    checkout.finalizar()


    # VALIDAÇÃO

    assert "Maria" in checkout.mensagem()
