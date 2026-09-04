const produtos = {
    1: ["Bolo de Chocolate", 35],
    2: ["Cupcake", 8],
    3: ["Cookie", 6]
};

let carrinho = [];


/* LOGIN */

function login() {

    let usuario =
        document.getElementById("usuario").value;

    let senha =
        document.getElementById("senha").value;

    if (usuario == "admin" && senha == "1234") {

        document.getElementById("login").style.display = "none";

        document.getElementById("loja").style.display = "block";

    } else {

        document.getElementById("erro").textContent =
            "Usuário ou senha incorretos.";

    }
}


/* ADICIONAR */

function adicionar(id) {

    let item = carrinho.find(x => x.id == id);

    if (item) {

        item.qtd++;

    } else {

        carrinho.push({
            id: id,
            qtd: 1
        });

    }

    atualizar();

}


/* ATUALIZAR CARRINHO */

function atualizar() {

    let qtd = 0;

    carrinho.forEach(x => qtd += x.qtd);

    document.getElementById("qtd").textContent = qtd;

}


/* ABRIR CARRINHO */

function abrirCarrinho() {

    document.getElementById("produtos").style.display = "none";

    document.getElementById("carrinho").style.display = "block";

    mostrarItens();

}


/* MOSTRAR ITENS */

function mostrarItens() {

    let area =
        document.getElementById("itens");

    area.innerHTML = "";

    let total = 0;


    if (carrinho.length == 0) {

        area.innerHTML =
            "<p>Seu carrinho está vazio.</p>";

    }


    carrinho.forEach(item => {

        let p = produtos[item.id];

        let subtotal = p[1] * item.qtd;

        total += subtotal;


        area.innerHTML += `

            <div class="item">

                <span>
                    ${p[0]}
                </span>

                <span>
                    ${item.qtd}x
                </span>

                <span>
                    R$ ${subtotal.toFixed(2)}
                </span>

                <button
                    onclick="remover(${item.id})"
                >
                    Remover
                </button>

            </div>

        `;

    });


    document.getElementById("total").textContent =
        "Total: R$ " + total.toFixed(2);

}


/* REMOVER */

function remover(id) {

    carrinho =
        carrinho.filter(x => x.id != id);

    atualizar();

    mostrarItens();

}


/* VOLTAR */

function abrirProdutos() {

    document.getElementById("carrinho").style.display = "none";

    document.getElementById("produtos").style.display = "block";

}


/* CHECKOUT */

function checkout() {

    if (carrinho.length == 0) {

        alert("Adicione um doce primeiro!");

        return;

    }

    document.getElementById("carrinho").style.display = "none";

    document.getElementById("finalizar").style.display = "block";

}


/* FINALIZAR */

function finalizar() {

    let nome =
        document.getElementById("nome").value;

    let endereco =
        document.getElementById("endereco").value;

    let telefone =
        document.getElementById("telefone").value;


    if (!nome || !endereco || !telefone) {

        alert("Preencha todos os campos!");

        return;

    }


    document.getElementById("finalizar").style.display = "none";

    document.getElementById("sucesso").style.display = "block";


    document.getElementById("mensagem").textContent =
        "Obrigado, " + nome +
        "! Seu pedido foi recebido.";


    carrinho = [];

    atualizar();

}


/* NOVA COMPRA */

function novaCompra() {

    document.getElementById("sucesso").style.display = "none";

    document.getElementById("produtos").style.display = "block";

}