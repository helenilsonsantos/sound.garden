const requisicao = async () => {
    const requisicao = await fetch (`${BASE_URL}/events`,options)
    const resposta = await requisicao.json()

    let htmlData = ""
    for(let i=0; i<3; i++){
        const datas = resposta[i].scheduled
        const dataFormatada = new Date(datas)
        htmlData+=`<article class="evento card p-5 m-3">
        <h2>${resposta[i].name}-${dataFormatada}</h2>
        <h4>${resposta[i].attractions}</h4>
        <p>${resposta[i].description}</p>
        <a href="#?id=${resposta[i]._id}" class="btn btn-primary" id="ativarModal" eventoId="${resposta[i]._id}">reservar ingresso</a>
    </article>`
    }
    cardContainer.innerHTML += htmlData
    click()
    };
requisicao();