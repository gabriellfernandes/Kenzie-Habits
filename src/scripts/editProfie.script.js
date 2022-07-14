import { Api } from "../controller/api.controller.js";
import { UserModal } from "../controller/modalUser.controller.js";

export function editProfile() {
    const profileEdit__form = document.querySelector("#profileEdit__form");
    const profileEdit__modal = document.querySelector("#profileEdit__modal");
    const profileEdit__name1 = document.querySelector("#profileEdit__userInput");
    const profileEdit__imageInput1 = document.querySelector("#profileEdit__imageInput");
    const profileEdit__close = document.querySelector("#profileEdit__close");

    profileEdit__close.addEventListener("click", () => {
        profileEdit__modal.style.display = "none";
        profileEdit__name1.value = ""
        profileEdit__imageInput1.value = ""
    })

    profileEdit__form.addEventListener("submit", event => {
        event.preventDefault();

        const profileEdit__name = document.querySelector("#profileEdit__userInput").value;
        const profileEdit__imageInput = document.querySelector("#profileEdit__imageInput").value;
        
        let user = {}
        if(profileEdit__imageInput == ""  &&  profileEdit__name == ""){
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Nenhuma alteração foi feita!',
                showConfirmButton: false,
                timer: 1500
              })
        }else if(profileEdit__imageInput == "" ){
            user = {
                usr_name: profileEdit__name
            }
        }else if(profileEdit__name == ""){
            user = {
                usr_image: profileEdit__imageInput
            }
        }else{
            user = {
                usr_name: profileEdit__name,
                usr_image: profileEdit__imageInput
            }
        }

        Api.apiUpdateUser(user).then(res => {
            if (res.message == undefined) {
                UserModal.modalUser(res);
                profileEdit__modal.style.display = "none";
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Perfil alterado com sucesso!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  
                  profileEdit__name1.value = ""
                  profileEdit__imageInput1.value = ""
            } 

        })
    });
}