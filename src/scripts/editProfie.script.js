import { Api } from "../controller/api.controller.js";
import { UserModal } from "../controller/modalUser.controller.js";

export function editProfile() {
    const profileEdit__form = document.querySelector("#profileEdit__form");
    const profileEdit__modal = document.querySelector("#profileEdit__modal");

    const profileEdit__close = document.querySelector("#profileEdit__close");
    profileEdit__close.addEventListener("click", () => {
        profileEdit__modal.style.display = "none";
    })

    profileEdit__form.addEventListener("submit", event => {
        event.preventDefault();

        const profileEdit__name = document.querySelector("#profileEdit__userInput").value;
        const profileEdit__imageInput = document.querySelector("#profileEdit__imageInput").value;
        const user = {
            usr_name: profileEdit__name,
            usr_image: profileEdit__imageInput
        }

        Api.apiUpdateUser(user).then(res => {
            console.log(res)
            if (res.message == undefined) {
                profileEdit__modal.style.display = "none";
                UserModal.modalUser();
            } else {
                const modalError = document.getElementById('modal__loginerror');
                modalError.innerText = res.message;
                modalError.style.display = 'flex';
                modalError.addEventListener('click', () => {
                    modalError.style.display = 'none';
                })

            }
        })
    });
}