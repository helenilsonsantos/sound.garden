const BASE_URL = 'https://xp41-soundgarden-api.herokuapp.com';
const carregando = document.querySelector('#carregarFundo');
const table = document.querySelector('tbody');
const parametros = new URLSearchParams (window.location.search)
const id = parametros.get("id")
let btnExcluir = document.querySelectorAll("#excluir")

const Options = {
    method :'GET',
    header: {
        "Content-Type": "application/json"
    },
    redirect :'follow',
};

function click (){
    btnExcluir = document.querySelectorAll(".btn.btn-danger.excluir")
    btnExcluir.forEach(btn => {
        btn.addEventListener("click", async excluirReserva =>{
            const requestOptions = {
                method : "DELETE",
                header: {
                    "Content-Type": "application/json"
                },
                redirect: 'follow',
            }   
            const request = await fetch (`${BASE_URL}/bookings/${btn.getAttribute("x-data")}`, requestOptions)
            alert ("Reserva excluida com sucesso!")
            return window.location.href = `reservas.html?id=${id}`

        })
    })
}

window.addEventListener("load", async() => { 
    const request = await fetch (`${BASE_URL}/bookings/event/${id}`, Options)
    const conteudoResposta = await request.json();
    console.log(request)
    let htmlData = ''

    for(let index = 0; index < conteudoResposta.length; index++){
        htmlData += `<tr> 
        <td>${conteudoResposta[index].owner_name}</td>
        <td>${conteudoResposta[index].owner_email}</td>
        <td>${conteudoResposta[index].number_tickets}</td>
        <td><a href="#" class="btn btn-danger excluir" x-data="${conteudoResposta[index]._id}">Excluir reserva</a></td>
        </tr>`    
    }
    table.innerHTML = htmlData;
    click();
})

