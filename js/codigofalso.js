const inputNome = document.querySelector('#nome');
const inputAtracoes = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputLotacao =document.querySelector('#lotacao');
const inputBanner = document.querySelector('#banner');
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
    event.preventDefault();
    const newEvent = {
        name: inputNome.value,
        poster: inputBanner.value,
        attractions: [inputAtracoes.value],
        description: inputDescricao.value,
        scheduled: inputData.value,
        number_tickets: inputLotacao.value
    }
    const options = {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
        redirect: 'follow'
    }
    const response = await fetch(`${BASE_URL}/events`, options)
    const responseContent = await response.json();
    //console.log(responseContent);
})