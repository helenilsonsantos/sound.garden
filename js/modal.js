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
    links.forEach(link=>{
        link.addEventListener("click", async() => {
            modalContainer.classList.add("show")
            console.log(link)
        })
        btnFechar.addEventListener('click',() => {
            modalContainer.classList.remove('show')
        })  
    })
    
}

form.addEventListener ("submit",async evento => {
    evento.preventDefault()
    const idAtual = window.location.href.split("=")[1]
    const novaReserva = {
        owner_name: inputNome.value,
        owner_email:inputEmail.value,
        number_tickets:inputIngresso.value,
        event_id: idAtual,

    };
    const options = {
        method:"POST",
        body:JSON.stringify(novaReserva),
        redirect:"follow",
        headers: {
            "Content-Type":"application/json"
        }

    };
    const requisicao = await fetch (`${BASE_URL}/bookings/`,options)
    const requisicaoConteudo = await requisicao.json()
    alert ("Reserva feita com sucesso")
    return window.location.href = 'index.html'
});

