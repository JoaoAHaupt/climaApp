const apiKey="c0f4b40f836f69420f6281c4a0b9ca24";
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const caixa = document.querySelector("#caixa");
const pesquisa = document.querySelector(".pesquisa input");
const pesquisaBotao = document.querySelector(".pesquisa button");
const iconeClima= document.querySelector(".icone-clima")


async function checkWeather(cidade){
    const response = await fetch(apiUrl+ cidade +`&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temperatura").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + "Km/h";

    if(data.weather[0].main == "Clouds"){
        iconeClima.src = "imagens/nuvens.png";
        caixa.style.background = "linear-gradient(70deg, #0deb5b, #e2463e)";
    }
    else if(data.weather[0].main == "Clear"){
        iconeClima.src = "imagens/sol.png";
        caixa.style.backgroundColor = "linear-gradient(70deg, #0deb5b, #e2463e);";

    }
    else if(data.weather[0].main == "Rain"){
        iconeClima.src = "imagens/chuva.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        iconeClima.src = "imagens/garoa.png";
    }
    else if(data.weather[0].main == "Mist"){
        iconeClima.src = "imagens/nublado.png";
    }

}

pesquisaBotao.addEventListener("click", ()=>{
    checkWeather(pesquisa.value);
});

