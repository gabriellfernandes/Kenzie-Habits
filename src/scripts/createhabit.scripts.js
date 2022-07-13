import { Modais } from "../controller/Modals.controller.js";
import { Api } from "../controller/api.controller.js";
import { itemsTable } from "./itemtable.script.js";
export function creatHabit(){
    const habits__create = document.querySelector("#habits__create");
    habits__create.addEventListener("click", (event) => {
        event.preventDefault();
        Modais.createModalHabit();

        const create__modal = document.querySelector("#create__modal");
        create__modal.style.display = "flex";

        const create__inner = document.querySelector("#create__inner");
        create__inner.style.display = "block";  
        
        const create__close = document.querySelector("#create__close");
        create__close.addEventListener("click", () => {
            create__modal.style.display = "none";
            create__inner.style.display = "none";
            event.preventDefault();
        })

        const create__form = document.querySelector("#create__form");
        create__form.addEventListener("submit", (event) => {
            event.preventDefault();

            const create__title = document.querySelector("#create__habitInput");
            const create__description = document.querySelector("#create__descriptionInput");
            const create__category = document.querySelector("#create__select");
            const create__categoryValue = create__category.options[create__category.selectedIndex].value.toLowerCase();
            Api.apiCreateHabit(create__title.value, create__description.value, create__categoryValue).then(habit => {
                console.log(habit)
                if(habit.message == undefined){
                    Modais.createModalHabit();
                    create__modal.style.display = "none";
                    create__inner.style.display = "none";
                    itemsTable();
                }
            })
        })
    })
}