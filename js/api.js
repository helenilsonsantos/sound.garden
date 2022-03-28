const inputNome = document.querySelector('#nome');
const inputPoster = document.querySelector('#poster');
const inputAtracoes = document.querySelector('#atracoes');
const inputDescricao = document.querySelector('#descricao');
const inputData = document.querySelector('#data');
const inputLotacao = document.querySelector('#lotacao');
const inputForm = document.querySelector('form');

const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

inputForm.addEventListener('submit', async (evento)=>{
    evento.preventDefault();

    const novoEvento = {
        name : inputNome.value,
        poster : inputPoster.value,
        attractions : [inputAtracoes.value],
        description : inputDescricao.value,
        scheduled : inputData.value,
        number_tickets : inputLotacao.value,
    }

    const options ={
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(novoEvento),
        redirect: 'follow'
     }
    
    const resposta = await fetch (`${BASE_URL}/events`, options)
    const conteudoresposta = await resposta.json();
})



