

const key = "99eabd051f85bac449c48ff1d47cf2ce"

function colocarDadosNaTela(dados) {

}

async function buscarCidade() {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br`).then( resposta => resposta.json())
    
    (dados)

}

function cliqueiNoBotao() {
    const input = document.querySelector(".input-cidade").value

    console.log(input)

    buscarCidade(cidade)  
    
}