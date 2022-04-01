const carregando = document.querySelector('#carregarFundo')

let htmlData = ''


const Options = {
    method :'GET',
    redirect :'follow',
};

const listEventos = async() => { 
    const request = await fetch (`${BASE_URL}/events`, Options)
    const conteudoResposta = await request.json();
    let htmlData = ''

    for(let i = 0; i < conteudoResposta.length; i++){
        const datas = conteudoResposta[i].scheduled
        const dataFormatada = new Date(datas)
        htmlData+=`<article class="evento card p-5 m-3">
        <h2>${conteudoResposta[i].name}- ${dataFormatada}</h2>
        <h4>${conteudoResposta[i].attractions}</h4>
        <p>${conteudoResposta[i].description}</p>
        <a href="#?id=${conteudoResposta[i]._id}" class="btn btn-primary" id="ativarModal" eventoId="${conteudoResposta[i]._id}">reservar ingresso</a>
        </article>`
    };

    cardContainer.innerHTML += htmlData
    click()

};
listEventos()

