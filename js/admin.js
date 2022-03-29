const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const table = document.querySelector('tbody');
const Options = {
    method :'GET',
    redirect :'follow',
};

const listEventos = async() => { 
    const request = await fetch (`${BASE_URL}/events`, Options)
    const conteudoResposta = await request.json();
    let htmlData = ''

    for(let index = 0; index < conteudoResposta.length; index++){
        htmlData += `<tr>
        <th scope="row">${index}</th>
        <td>${conteudoResposta[index].scheduled}</td>
        <td>${conteudoResposta[index].name}</td>
        <td>${conteudoResposta[index].attractions}</td>
        <td>
            <a href="reservas.html/?id=${conteudoResposta[index]._id}" class="btn btn-dark">ver reservas</a>
            <a href="editar.html/?id=${conteudoResposta[index]._id}" class="btn btn-secondary">editar</a>
            <a href="excluir-evento.html/?id=${conteudoResposta[index]._id}" class="btn btn-danger">excluir</a>
        </td>
    </tr>`

    }
    table.innerHTML = htmlData
};    

listEventos()
