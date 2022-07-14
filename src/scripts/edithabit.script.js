import { Api } from "../controller/api.controller.js"
import { UserModal } from "../controller/modalUser.controller.js"
export function editHabit(){
    const table__editButton = document.getElementsByClassName("btn")
    document.body.addEventListener("click", event => {
        let cont = 0
       
        Array.from(table__editButton).forEach(element => {
            if(event.target.className.replace(/[^0-9]/g,'') == element.className.replace(/[^0-9]/g,'')){ 
                console.log(element.className.replace(/[^0-9]/g,''))   
                element.addEventListener("click", () => {
                    const edit__modal = document.querySelector("#edit__modal");
                    edit__modal.style.display = "flex";

                    const edit__close = document.querySelector("#edit__close");
                    edit__close.addEventListener("click", () => {
                        edit__modal.style.display = "none";
                        cont = 0
                    })
                    cont = 0
                    if(cont == 0){
                        const edit__delete = document.querySelector("#edit__delete");
                        edit__delete.addEventListener("click", () => {
                            cont++
                            if(cont > 1){return}
                            const table = document.getElementsByClassName("table")[element.className.replace(/[^0-9]/g,'')];
                            const habit_id = table.className.replace(/[^0-9]/g,'');
                            return Api.apiDeleteHabit(habit_id).then(habit => {
                                if(habit.message != undefined){
                                    edit__modal.style.display = "none";
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'success',
                                        title: 'Habito excluido com sucesso!',
                                        showConfirmButton: false,
                                        timer: 1500
                                      })
                                    Api.apiGetHabits().then(habits => {UserModal.itemHabit(habits)})
                                    
                                }else{
                                    alert(habit.message)
                                }
                            })
                            
                            
                        })
                    }
                    
                    
                    if(cont == 0){
                        const edit__form = document.querySelector("#edit__form");
                        edit__form.addEventListener("submit", event => {
                            event.preventDefault();
                            const table = document.getElementsByClassName("table")[element.className.replace(/[^0-9]/g,'')];
                            const habit_id = table.className.replace(/[^0-9]/g,'');
                            const edit__habitInput = document.querySelector("#edit__habitInput");
                            const edit__descriptionInput = document.querySelector("#edit__descriptionInput");
                            const edit__select = document.querySelector("#edit__select");
                            const edit__selectvalue = edit__select.options[edit__select.selectedIndex];
                            const edit__checkbox = document.querySelector("#edit__checkbox");
                            if(edit__checkbox.checked == true){
                                Api.apiCompleteHabit(habit_id)
                            }
                            Api.apiUpdateHabit(habit_id, edit__habitInput.value, edit__descriptionInput.value, edit__selectvalue.value.toLowerCase()).then(habit => {
                                if(habit.message == undefined){
                                    edit__habitInput.value = "";
                                    edit__descriptionInput.value = "";
                                    edit__selectvalue.value = "";
                                    edit__checkbox.checked = false;
                                    edit__modal.style.display = "none";
                                    Api.apiGetHabits().then(habits => {UserModal.itemHabit(habits)})
                                    cont++
                                }else{
                                    cont++
                                    Swal.fire({
                                        position: 'top-center',
                                        icon: 'error',
                                        title: habit.message ==  "habit_title obrigatório" ? "Título obrigatório" : habit.message == "habit_description obrigatório" ? "Descrição obrigatória" : "Categoria obrigatória",
                                        showConfirmButton: false,
                                        timer: 2000
                                      })
                                }
                            })
                        })
                    }
                })
            }
        })
    })

}