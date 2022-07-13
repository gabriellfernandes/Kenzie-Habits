export class UserModal {
    static baseTable = document.querySelector("#table__habits");

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

    static itemHabit(habit){
        this.baseTable.innerHTML = '';
        this.baseTable.innerHTML = `
        <tr id="table__header">
            <section id="table__section">
            <h3 id="table__status">Status</h3>
            <h3 id="table__title">Titulo</h3>
            <h3 id="table__description">Descrição</h3>
            <h3 id="table__category">Categoria</h3>
            <h3 id="table__edit">Editar</h3>
            </section>
        </tr>`
        
        habit.forEach(element => {
            const table__content = document.createElement('tr');
                table__content.id = "table__content";
                this.baseTable.appendChild(table__content);

            const table__check = document.createElement('td');
                table__check.id = "table__check";
                table__content.appendChild(table__check);
            const table__checkbox = document.createElement('input');
                table__checkbox.type = "checkbox";
                table__checkbox = "table__checkbox";
                table__check.appendChild(table__checkbox);

            const table__nameHabit = document.createElement('td');
                table__nameHabit.id = "table__nameHabit";
                table__nameHabit.innerText = element.habit_title;
                table__content.appendChild(table__nameHabit);

            const table__descriptionHabit = document.createElement('td');
                table__descriptionHabit.id = "table__descriptionHabit";
                table__descriptionHabit.innerText = element.habit_description;
                table__content.appendChild(table__descriptionHabit);

            const table__categoryHabit = document.createElement('td');
                table__categoryHabit.id = "table__categoryHabit";
                table__categoryHabit.innerText = element.habit_category;
                table__content.appendChild(table__categoryHabit);

            const table__editTd = document.createElement('td');
                table__editTd.id = "table__editTd";
                table__content.appendChild(table__editTd);
            
            const table__editButton = document.createElement('button');
                table__editButton.id = "table__editButton";
            
            const table__editImg = document.createElement('img');
                table__editImg.src = "../../assets/img/editbutton.png";
                table__editImg.id = "table__editImg";
                table__editButton.appendChild(table__editImg);
                table__editTd.appendChild(table__editButton);

        })
    }
}