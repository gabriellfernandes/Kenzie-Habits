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

    static checkBoxComplete() {
        document.addEventListener("click", (event) => {
            if (event.target.id == "table__checkbox") {
                Api.apiCompleteHabit(event.target.className)
                console.log(document.getElementsByClassName(event.target.className)[1].checked == false)
                if (document.getElementsByClassName(event.target.className)[1].checked == false) {
                    document.getElementsByClassName(event.target.className)[1].checked = false
                    const table__content = document.getElementsByClassName(event.target.className)[0]
                    const title = table__content.childNodes[1].innerText
                    const description = table__content.childNodes[2].innerText
                    const category = table__content.childNodes[3].innerText
                    Api.apiIncompleteHabit(event.target.className, title, description, category).then(res => console.log(res))
                }
            }
        })
    }
}

