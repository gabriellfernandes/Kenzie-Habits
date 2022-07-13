import { Modais } from "../controller/Modals.controller.js";
import { Api } from "../controller/api.controller.js";
import { itemsTable } from "./itemtable.script.js";
export function creatHabit(){
    const habits__create = document.querySelector("#habits__create");
    habits__create.addEventListener("click", (event) => {
        console.log("rodei")
        event.preventDefault();
        Modais.createModalHabit();

        const create__modal = document.querySelector("#create__modal");
        create__modal.style.display = "flex";

        const create__inner = document.querySelector("#create__inner");
        create__inner.style.display = "block";  

        const create__submitButton = document.querySelector("#create__submitButton");
        create__submitButton.addEventListener("click", (event) => {
            event.preventDefault();
            const create__title = document.querySelector("#create__habitInput");
            const create__description = document.querySelector("#create__descriptionInput");
            const create__category = document.querySelector("#create__select");
            const create__categoryValue = create__category.options[create__category.selectedIndex].value;
            Api.apiCreateHabit(create__title.value, create__description.value, create__categoryValue).then(habit => {
                console.log(habit)
                Modais.createModalHabit();
                create__modal.style.display = "none";
                create__inner.style.display = "none";
                itemsTable();
            }).catch(err => console.log(err));
        })
    })
}