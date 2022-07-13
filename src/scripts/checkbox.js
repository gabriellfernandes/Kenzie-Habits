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
}

