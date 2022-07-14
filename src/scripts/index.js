import { loginFunction } from "./loginFunction.scripts.js";
import { UserModal } from "../controller/modalUser.controller.js";
import { Modais } from "../controller/Modals.controller.js";
import { itemsTable } from "./itemtable.script.js";
import { creatHabit } from "./createhabit.scripts.js";
import { Checkbox } from "./checkbox.js";
import { MenuDropdown } from "./modalEdit.js";
import { editProfile } from "./editProfie.script.js";
import { editHabit} from "./edithabit.script.js";
import { Logout } from "./logout.js";
if(localStorage.getItem('@CapStone-Token') == undefined){
    localStorage.setItem('@CapStone-Token', null)
}


if (localStorage.getItem('@CapStone-Token') != null) {
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'none';
    
} else {
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'flex';
}
if(JSON.parse(localStorage.getItem('@CapStone-User')) != undefined || JSON.parse(localStorage.getItem('@CapStone-User')) != null){
    UserModal.modalUser(JSON.parse(localStorage.getItem('@CapStone-User')));
}else{
    const modalLogin = document.getElementById('login__modal');
    modalLogin.style.display = 'flex';
}

loginFunction();
creatHabit();
itemsTable();
editProfile();
editHabit();


Checkbox.checkBoxComplete();

const checkbox = document.getElementById("table__checkbox")
checkbox.addEventListener("click", Checkbox.check)

const profile__logout = document.getElementById("profile__logout")
profile__logout.addEventListener("click", () =>{
    Swal.fire({
        title: 'você tem certeza?',
        text: "Você realmente deseja sair?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Deslogar!'
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
            'Deslogado!',
            'Deslogado com sucesso.',
            'success'
            )
            setTimeout(() => {
            Logout.logoutButton()},700)
        }
        })
    })

const header__logo = document.getElementById("header__logo")
header__logo.addEventListener("click", MenuDropdown.menu)

const profile__edit = document.getElementById("profile__edit")
profile__edit.addEventListener("click", MenuDropdown.editProfile)

const profileEdit__close = document.getElementById("profileEdit__close")
profileEdit__close.addEventListener("click", Modais.closeEdit)

const create__close = document.getElementById("create__close")
create__close.addEventListener("click", Modais.closeCreate)

const logoutButton = document.getElementById("header__logout")

