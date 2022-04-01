const inputNome = document.querySelector("#nome");
const inputBanner = document.querySelector("#banner");
const inputAtracoes = document.querySelector("#atracoes");
const inputDescricao = document.querySelector("#descricao");
const inputData = document.querySelector("#data");
const inputLotacao = document.querySelector("#lotacao");

const form = document.querySelector("form");

const parametros = new URLSearchParams(window.location.search);
const id = parametros.get("id");

const BASE_URL = "https://xp41-soundgarden-api.herokuapp.com/events";
const options  = {
    method: "GET", 
    redirect: "follow",
    header: {
        'Content-Type': 'application/json'
    }
};

const formatNumber = (numero) => {
    if ( numero < 10 ) {
        return "0"+numero
    }
    return numero
}


const requisicao = async () => {
    const requisicao = await fetch (`${BASE_URL}/${id}`,options)
    const resposta = await requisicao.json()
    const {name, attractions, poster, description, scheduled, number_tickets} = resposta;
    const newDate = new Date(scheduled)
    const dataFormatada = `${newDate.getFullYear()}-${formatNumber(newDate.getMonth())}-${newDate.getDate()}T${formatNumber(newDate.getHours())}:${formatNumber(newDate.getMinutes())}`
    inputNome.value=name;
    inputBanner.value=poster;
    inputAtracoes.value=attractions;
    inputDescricao.value=description;
    inputData.value=dataFormatada;
    inputLotacao.value=number_tickets;
    // console.log(resposta);
};
requisicao();

form.addEventListener("submit" , async evento => {
    evento.preventDefault();
    const excluirEvento = {
        name:inputNome.value,
        poster:inputBanner.value,
        attractions:[inputAtracoes.value],
        description:inputDescricao.value,
        scheduled:inputData.value,
        number_tickets:inputLotacao.value,
    }

    const excluir = {
        method:"DELETE",
        body: JSON.stringify(excluirEvento),
        headers: {
            "Content-Type":"application/json",
        },
        redirect: "follow",
    }
    const requisicao = await fetch (`${BASE_URL}/${id}`,excluir)
    // console.log(requisicao)
    // console.log(eventoAtualizado)
    alert ("Evento excluido com sucesso")

    window.location.href = 'admin.html'
}); 

