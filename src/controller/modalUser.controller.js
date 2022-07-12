class UserModal {
    static modalUser(user) {
        const divUser = document.createElement('div');
        
        const divUserInfo = document.createElement('div');
        divUser.appendChild(divUserInfo);

        const userIgm = document.createElement('img');
        userIgm.src = user.usr_image;
    }


}