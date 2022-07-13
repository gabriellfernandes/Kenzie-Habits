class Quit {
    static logoutButton() {
        localStorage.clear()
        window.location.reload()
    }
}

export { Quit }