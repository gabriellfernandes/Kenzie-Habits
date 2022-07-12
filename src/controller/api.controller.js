export class Api {
    static baseUrl = 'https://habits-kenzie.herokuapp.com/api';
    static headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("@CapStone-Token")}`
    }
    
    static async apiLogin(email, password) {
        return await fetch(`${this.baseUrl}/userLogin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        }).then(res => res.json()).then(res => {
            localStorage.setItem("@CapStone-User", JSON.stringify(res.response))
            localStorage.setItem("@CapStone-Token", res.token)
            return res
        }).catch(err => console.log(err));
    }

    static async apiUpdateUser(igm) {
        return await fetch(`${this.baseUrl}/user/profile`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                usr_image: igm
            })
        }).then(res => res.json()).then(res => {
            localStorage.setItem("@CapStone-User", JSON.stringify(res))
            return res
        }).catch(err => console.log(err));
    }

    static async apiCreateHabit(title, description, category) {
        return await fetch(`${this.baseUrl}/habit`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                habit_title: title,
                habit_description: description,
                habit_category: category
            })
        }).then(res => res.json()).then(res => {
            return res
        }).catch(err => console.log(err));
    }

    static async apiGetHabits() {
        return await fetch(`${this.baseUrl}/habit`, {
            method: 'GET',
            headers: this.headers
        }).then(res => res.json()).then(res => {
            return res
        }).catch(err => console.log(err));;
    }

    static async apiGetHabitCategory(category) {
        return await fetch(`${this.baseUrl}/habit/${category}`, {
            method: 'GET',
            headers: this.headers
        }).then(res => res.json()).then(res => {
            return res
        }).catch(err => console.log(err));
    }

    static async apiUpdateHabit(id, title, description, category) {
        return await fetch(`${this.baseUrl}/habit/${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({
                habit_title: title,
                habit_description: description,
                habit_category: category
            })
        }).then(res => res.json()).then(res => {
            return res
        }).catch(err => console.log(err));
    }

    static async apiCompleteHabit(id) {
        return await fetch(`${this.baseUrl}/habit/complete${id}`, { 
            method: 'PATCH',
            headers: this.headers}).then(res => res.json()).then(res => res).catch(err => console.log(err));
    }

    static async apiDeleteHabit(id) {
        return await fetch(`${this.baseUrl}/habit/${id}`, {
            method: 'DELETE',
            headers: this.headers
        }).then(res => res.json()).then(res => {
            return res
        }).catch(err => console.log(err));
    }
}