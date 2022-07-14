import { Modais } from "../controller/Modals.controller.js";
import { Api } from "../controller/api.controller.js";
import { itemsTable } from "./itemtable.script.js";
export function creatHabit() {
    let cont = 0
    const habits__create = document.querySelector("#habits__create");
    habits__create.addEventListener("click", (event) => {
        event.preventDefault();
        const create__modal = document.querySelector("#create__modal");
        create__modal.style.display = "flex";



        const create__close = document.querySelector("#create__close");
        create__close.addEventListener("click", () => {
            create__modal.style.display = "none";
            const create__title = document.querySelector("#create__habitInput");
            const create__description = document.querySelector("#create__descriptionInput");
            create__title.value = "";
            create__description.value = "";
            event.preventDefault();

        })
        if (cont == 0) {
            cont++
            const create__form = document.querySelector("#create__form");
            create__form.addEventListener("submit", (event) => {
                event.preventDefault();

                const create__title = document.querySelector("#create__habitInput");
                const create__description = document.querySelector("#create__descriptionInput");
                const create__category = document.querySelector("#create__select");
                const create__categoryValue = create__category.options[create__category.selectedIndex];
                Api.apiCreateHabit(create__title.value, create__description.value, create__categoryValue.value.toLowerCase()).then(habit => {
                    console.log(habit.message)
                    if (habit.message == undefined) {
                        create__title.value = "";
                        create__description.value = "";
                        create__modal.style.display = "none";
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Habito criado com sucesso!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        return itemsTable();
                    } else {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: habit.message == "habit_title obrigatório" ? "Título obrigatório" : habit.message == "habit_description obrigatório" ? "Descrição obrigatória" : "Categoria obrigatória",
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
                })
            })
        } else {
            return
        }

    })
}
