const profile__modal = document.getElementById("profile__modal")

class MenuDropdown {
    static menu() {
        if (profile__modal.style.display != "block") {
            profile__modal.style.display = "block"
        } else if (profile__modal.style.display != "none") {
            profile__modal.style.display = "none"
        }
    }

    static editProfile() {
        const profileEdit__modal = document.getElementById("profileEdit__modal")
        profileEdit__modal.style.display = "flex"
    }
}

export { MenuDropdown }