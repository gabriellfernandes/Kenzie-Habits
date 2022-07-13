import { Api } from "../controller/api.controller.js";

export function loginFunction() {
    const formLogin = document.getElementById('login__form');
    formLogin.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login__emailInput').value;
        const password = document.getElementById('login__passwordInput').value;
        const modalLogin = document.getElementById('login__modal');
        const modalError = document.getElementById('modal__loginerror');
        Api.apiLogin(email, password).then(res => {
            if (res.token !== undefined) {
                modalLogin.style.display = 'none';
                console.log("Login Successful");
            } else {
                modalError.innerText = res.message;
                modalError.style.display = 'flex';
                modalError.addEventListener('click', () => {
                    modalError.style.display = 'none';
                })
            }
        });
    })
}