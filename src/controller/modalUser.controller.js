export class UserModal {
    static modalUser(user) {
        const divUser = document.createElement('div');
        divUser.id = 'user';

        const userIgm = document.createElement('img');
        userIgm.id = "header__logo"
        userIgm.src = user.usr_image;
        divUser.appendChild(userIgm);

        const user__name = document.createElement('h2');
        user__name.id = "user__name";
        user__name.innerHTML = user.usr_name;
        divUser.appendChild(user__name);        
    } 
}