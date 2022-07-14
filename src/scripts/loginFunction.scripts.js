import { Api } from "../controller/api.controller.js";
import { UserModal } from "../controller/modalUser.controller.js";
import { Logout } from "./logout.js";
import { Modais } from "../controller/Modals.controller.js";
import { MenuDropdown } from "./modalEdit.js";

export function loginFunction() {
    const formLogin = document.getElementById('login__form');
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login__emailInput').value;
        const password = document.getElementById('login__passwordInput').value;
        const modalLogin = document.getElementById('login__modal');
        Api.apiLogin(email, password).then(res => {
            if (res.token !== undefined) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Logado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
                UserModal.modalUser(JSON.parse(localStorage.getItem('@CapStone-User')));
                localStorage.setItem('@CapStone-Token', res.token);
                
                Api.headers = {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem("@CapStone-Token")}`
                }

                setTimeout(() => {
                Api.apiGetHabits().then(res => {
                     UserModal.itemHabit(res)
                     modalLogin.style.display = 'none'
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
                     })},500);
                
            } else {
                Swal.fire({
                    position: 'top-center',
                    icon: 'error',
                    title: res.message,
                    showConfirmButton: false,
                    timer: 2000
                  })
            }
        });
    })
}