import { Api } from "../controller/api.controller.js"
import { UserModal } from "../controller/modalUser.controller.js"
export function editHabit(){
    const table__editButton = document.getElementsByClassName("btn")
    document.body.addEventListener("click", event => {
        Array.from(table__editButton).forEach(element => {
            if(event.target.className.replace(/[^0-9]/g,'') == element.className.replace(/[^0-9]/g,'')){
                
                element.addEventListener("click", () => {
                    const edit__modal = document.querySelector("#edit__modal");
                    edit__modal.style.display = "flex";

                    const edit__close = document.querySelector("#edit__close");
                    edit__close.addEventListener("click", () => {
                        edit__modal.style.display = "none";
                    })
                    const table = document.getElementsByClassName("table")[element.className.replace(/[^0-9]/g,'')];
                    const habit_id = table.className.replace(/[^0-9]/g,'');

                    const edit__delete = document.querySelector("#edit__delete");
                    edit__delete.addEventListener("click", () => {
                        Api.apiDeleteHabit(habit_id).then(habit => {
                            if(habit.message != undefined){
                                edit__modal.style.display = "none";
                                Api.apiGetHabits().then(habits => {UserModal.itemHabit(habits)})
                            }else{
                                alert(habit.message)
                            }
                        })
                    })

                    const edit__form = document.querySelector("#edit__form");
                    edit__form.addEventListener("submit", event => {
                        event.preventDefault();
                        const table = document.getElementsByClassName("table")[element.className.replace(/[^0-9]/g,'')];
                        const habit_id = table.className.replace(/[^0-9]/g,'');
                        const edit__habitInput = document.querySelector("#edit__habitInput").value;
                        const edit__descriptionInput = document.querySelector("#edit__descriptionInput").value;
                        const edit__select = document.querySelector("#edit__select");
                        const edit__selectvalue = edit__select.options[edit__select.selectedIndex].value.toLowerCase();
                        const edit__checkbox = document.querySelector("#edit__checkbox").checked;
                        if(edit__checkbox == true){
                            Api.apiCompleteHabit(habit_id)
                        }
                        Api.apiUpdateHabit(habit_id, edit__habitInput, edit__descriptionInput, edit__selectvalue).then(habit => {
                            if(habit.message == undefined){
                                edit__modal.style.display = "none";
                                Api.apiGetHabits().then(habits => {UserModal.itemHabit(habits)})
                            }else{
                                alert(habit.message)
                            }
                        })
                    })
                })
            }
        })
    })

}