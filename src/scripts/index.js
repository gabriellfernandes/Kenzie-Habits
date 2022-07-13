import { loginFunction } from "./loginFunction.scripts.js";
import { UserModal } from "../controller/modalUser.controller.js";
import { Modais } from "../controller/Modals.controller.js";
import { Logout } from "./logout.js";
import { Checkbox } from "./checkbox.js";
import { MenuDropdown } from "./modalEdit.js";

console.log(localStorage.getItem('@CapStone-Token'))
if (localStorage.getItem('@CapStone-Token') != null) {
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'none';
} else {
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'flex';
}

loginFunction();

const checkbox = document.querySelector("#table__checkbox")
checkbox.addEventListener("click", Checkbox.check)

const profile__logout = document.getElementById("profile__logout")
profile__logout.addEventListener("click", Logout.logoutButton)

const header__logo = document.getElementById("header__logo")
header__logo.addEventListener("click", MenuDropdown.menu)

const profile__edit = document.getElementById("profile__edit")
profile__edit.addEventListener("click", MenuDropdown.editProfile)

const profileEdit__close = document.getElementById("profileEdit__close")
profileEdit__close.addEventListener("click", Modais.closeEdit)

const create__close = document.getElementById("create__close")
create__close.addEventListener("click", Modais.closeCreate)