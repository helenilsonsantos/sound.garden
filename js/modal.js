const modalContainer = document.querySelector("#modal-container")
let links = document.querySelectorAll("#ativarModal") 
let btnFechar = document.querySelector('.btn.btn-danger')
const cardContainer = document.querySelector("#card-container")
const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';

const inputNome = document.querySelector("#nome")
const inputEmail = document.querySelector("#e-mail")
const inputIngresso = document.querySelector("#quantidade-ingresso")
const form = document.querySelector("#formModal")

const options  = {
    method: "GET", 
    redirect: "follow",

};
const click = ()=> {
    links = document.querySelectorAll("#ativarModal") 
    btnFechar = document.querySelector('.btn.btn-danger')
    for(link of links) {
        link.addEventListener("click", async() => {
            modalContainer.classList.add("show")
            
        })
        btnFechar.addEventListener('click',() => {
            modalContainer.classList.remove('show')
        })
    }
    // console.log(link)
    
    
    
}
const requisicao = async () => {
    const requisicao = await fetch (`${BASE_URL}/events`,options)
    const resposta = await requisicao.json()
    // console.log(resposta)
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
    // console.log(link.getAttribute("eventoId"))
    };
requisicao();

// console.log(links)
// console.log(links);

form.addEventListener ("submit",async evento => {
    evento.preventDefault()
    // console.log(links)
    const idAtual = window.location.href.split("=")[1]
    const novaReserva = {
        owner_name: inputNome.value,
        owner_email:inputEmail.value,
        number_tickets:inputIngresso.value,
        event_id: idAtual
    }
    // console.log(idAtual)
    const options = {
        method:"POST",
        body:JSON.stringify(novaReserva),
        redirect:"follow",
        headers: {
            "Content-Type":"application/json"
        }

    }
    const requisicao = await fetch (`${BASE_URL}/bookings/`,options)
    const requisicaoConteudo = await requisicao.json()
   alert ("Reserva feita com sucesso")
   return window.location.href = 'index.html'
})

