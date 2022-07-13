export class Logout {
    static logoutButton() {
        localStorage.clear()
        window.location.reload()
    }
}