

const key = "99eabd051f85bac449c48ff1d47cf2ce"

function colocarDadosNaTela(dados) {

    document.querySelector(".cidade").innerHTML = "Tempo em " +  dados.name
    document.querySelector(".temp").innerHTML = dados.main.temp + "°C"
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
     }

async function buscarCidade(cidade) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    console.log(dados)
    
    colocarDadosNaTela(dados)

}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value


    buscarCidade(cidade)
    
}