const modalContainer = document.querySelector("#modal-container")
const links = document.querySelectorAll(".btn.btn-primary") 
// console.log(links);
for(link of links) {
    link.addEventListener("click", () => {
        modalContainer.classList.add("show")
    })
}


