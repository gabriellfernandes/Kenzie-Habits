import { Api } from "../controller/api.controller.js";
import { UserModal } from "../controller/modalUser.controller.js";

export function filterConcluded(){
    const habits__concluded = document.getElementById("habits__concluded");
    habits__concluded.addEventListener("click", () => {
        const complete = []
        Api.apiGetHabits().then(habits => {
            habits.forEach(habit => {
                if(habit.habit_status == true){
                    complete.push(habit)
                }
            })
            UserModal.itemHabit(complete)
        })
    })
    const habits__all = document.getElementById("habits__all");
    habits__all.addEventListener("click", () => {
        Api.apiGetHabits().then(habits => {
            UserModal.itemHabit(habits)
        })
    })
}