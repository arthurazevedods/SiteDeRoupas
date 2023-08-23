const burger = document.querySelector('.burger');
const navLinks = document.getElementById('nav-links-list');
const sessaoRoupas = document.getElementById('roupas')

let roupas = []
const endpoint = 'JSON/roupas.json'
getBuscarRoupas()

burger.addEventListener('click', () => { 
    navLinks.classList.toggle('active');
});

async function getBuscarRoupas() {
    const res = await fetch(endpoint)
    roupas = await res.json()
    //roupas = aplicarDesconto(roupas)
    exibirRoupasNaTela(roupas)
}

function exibirRoupasNaTela(listaDeRoupas) {
    //elementoComValorTotalDeRoupasDisponiveis.innerHTML = ''
    sessaoRoupas.innerHTML = ''

    listaDeRoupas.forEach(roupa => {
        //let disponibilidade = roupa.quantidade > 0 ? 'roupa__imagens' : 'roupa__imagens indisponivel' 
       
        sessaoRoupas.innerHTML += `
        <div class="roupa">
            <img class="disponibilidade" src="${roupa.imagem}" alt="${roupa.alt}" />
            <h2 class="roupa__titulo">
                ${roupa.titulo}
            </h2>
            <div class="price-shop">
                <p class="roupa__preco" id="preco">R$${roupa.preco.toFixed(2)}</p>
                <div class='btn-shop-item'>
                    <i class="fa-solid fa-cart-shopping"></i>
                </div>
            </div>
        </div>
        `
    })
}