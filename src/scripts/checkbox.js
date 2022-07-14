import { Api } from "../controller/api.controller.js"

const checkbox = document.querySelector("#table__checkbox")
export class Checkbox {
    static check() {
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

    static checkBoxComplete(){
       document.addEventListener("click", (event) => {
            if(event.target.id == "table__checkbox"){
                Api.apiCompleteHabit(event.target.className)
                console.log(document.getElementsByClassName(event.target.className)[1].checked == false)
                if(document.getElementsByClassName(event.target.className)[1].checked == false){
                    document.getElementsByClassName(event.target.className)[1].checked = false
                    Api.apiIncompleteHabit(event.target.className)
                }   
            }
       })
    }
}

