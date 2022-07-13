import { loginFunction } from "./loginFunction.scripts.js";
import { UserModal } from "../controller/modalUser.controller.js";
import { Modais } from "../controller/Modals.controller.js";
import { itemsTable } from "./itemtable.script.js";
import { Logout } from "./logout.js";
import { creatHabit } from "./createhabit.scripts.js";

if(localStorage.getItem('@CapStone-Token') != null){
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'none';
} else {
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'flex';
}
loginFunction();
itemsTable();
creatHabit();

const checkbox = document.querySelector("#table__checkbox")
checkbox.addEventListener("click", check)
function check() {
    if (checkbox.checked == true) {
        const table__content = document.getElementById("table__content")
        table__content.style.backgroundColor = "#F1F3F5"
        table__content.style.textDecoration = "line-through"
    }
    if (checkbox.checked == false) {
        const table__content = document.getElementById("table__content")
        table__content.style.backgroundColor = "#FFFFFF"
        table__content.style.textDecoration = "none"
    }
}


