import { Api } from "../controller/api.controller.js"
import { UserModal } from "../controller/modalUser.controller.js";

export function carregarMais(){
    let itens = 5
    const footer__button = document.getElementById("footer__button")
    
    footer__button.addEventListener("click", () => {
        itens+= 5
            Api.apiGetHabits().then(habits => {
                UserModal.itemHabit(habits, itens)
            })
    })
}