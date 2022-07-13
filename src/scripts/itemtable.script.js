import { UserModal } from "../controller/modalUser.controller.js";
import { Api } from "../controller/api.controller.js";
export function itemsTable() {
    
    Api.apiGetHabits().then(habits => {
        UserModal.itemHabit(habits);
    })
}