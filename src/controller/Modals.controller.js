export class Modais{
   
    static createModals(){


  // Criação do Modal de  Login
 
      const login__modal = document.createElement('div');
      login__modal.setAttribute('id','login__modal');
  
      
      const login__inner = document.createElement('div');
      login__inner.setAttribute('id','login__inner');


      const login__Call =  document.createElement('div');
      login__Call.setAttribute('id','login__Call');
  
      
   
      const login__title = document.createElement('h1');
      login__title.setAttribute('id','login__title');
      login__title.innerText = "KenzieHabit";
  
  
      const login__subtitle = document.createElement('h2');
      login__subtitle.setAttribute('id','login__subtitle');
      login__subtitle.innerText = "If you are going to use a passage of Lorem Ipsum";
  
  
      const login__paragraph = document.createElement('p');
      login__paragraph.setAttribute('id','login__paragraph');
      login__paragraph.innerText = "you need to be sure there isn't anything"
  
  
      const login__form =  document.createElement('form');
      login__form.setAttribute('id','login__form');

  
  
      const login__login = document.createElement('h2');
      login__login.setAttribute('id','login__login');
      login__login.innerText = "Login"
  
  
      const login__user = document.createElement('p');
      login__user.setAttribute('id','login__user');
      login__user.innerText = "Usuário"
  
  
      const login__emailInput = document.createElement('input');
      login__emailInput.setAttribute('id','login__emailInput');
      login__emailInput.innerHTML ="E-mail";
  
  
      const login__password = document.createElement('p');
      login__password.setAttribute('id','login__password');
      login__password.innerText = "Senha";
  
  
      const login__passwordInput = document.createElement('input');
      login__passwordInput.setAttribute('id','login__passwordInput');
      login__passwordInput.placeholder = "Senha"
  
  
      const login__submitButton = document.createElement('button');
      login__submitButton.setAttribute('id','login__submitButton');
      login__submitButton.type = "submit";
      login__submitButton.innerText = "Entrar";
  
      
      document.getElementById('body').appendChild(login__modal);
  
      login__modal.appendChild(login__inner);

       
      login__inner.append(login__Call, login__form);

      login__Call.append(login__title, login__subtitle, login__paragraph);
  
      login__form.append(login__login, login__user, login__emailInput, login__password, login__passwordInput, login__submitButton);
  



      const modal__loginerror = document.createElement('div');
      modal__loginerror.setAttribute('id','modal__loginerror');

      const paragraph__error = document.createElement('p');
      paragraph__error.innerText = "Error";

      const modal__loginbutton = document.createElement('button');
      modal__loginbutton.setAttribute('id','modal__loginbutton');
      modal__loginbutton.innerText = "X";


  
  
  
    
       // Criacao do Modal de Criar
      
       const create__modal = document.createElement('div');
       create__modal.setAttribute('id','create__modal');
  
  
       const create__inner = document.createElement('div');
       create__inner.setAttribute('id','create__inner');
  
  
       const create__close = document.createElement('button');
       create__close.setAttribute('id','create__close');
       create__close.innerText = "X";
         
  
       const create__form = document.createElement('form');
             create__form.setAttribute('id','create__form');
  
  
  
       const create__title = document.createElement('h2');
             create__title.setAttribute('id','create__title');
             create__title.innerText = "Criar Hábitos";
  
  
       const create__habitTitle = document.createElement('p');
             create__habitTitle.setAttribute('id','create__habitTitle');
             create__habitTitle.innerText = "Título";
  
       const create__habitInput = document.createElement('input');
             create__habitInput.setAttribute('id','create__habitInput')
             create__habitInput.placeholder = "Digitar título"  
       
  
       const create__description = document.createElement('p');
             create__description.setAttribute('id','create__description');
             create__description.innerText = "Descrição";      
       
   
       const create__descriptionInput = document.createElement('input');
             create__descriptionInput.setAttribute('id','create__descriptionInput'); 
             create__descriptionInput.placeholder = "Digitar descrição"; 
  
       const create__category = document.createElement('p'); 
             create__category.setAttribute('id','create__category');
             create__category.innerText ="Categoria";
   
   
       const create__select = document.createElement('select');
             create__select.setAttribute('id','create__select');
             create__select.placeholder = "selecione categoria";
   
       const create__submitButton = document.createElement('button'); 
             create__submitButton.setAttribute('id','create__submitButton');
             create__submitButton.type = "submit";
             create__submitButton.innerText = "Inserir";

            document.getElementById('body').appendChild(create__modal);

             create__modal.appendChild(create__inner);
  
             create__inner.append(create__close, create__form);
  
             create__form.append(create__title, create__habitInput, create__description, create__descriptionInput, create__category, create__submitButton)
              
  
  
  
  
 
  
// Criação do Modal de Editar
  const edit__modal = document.createElement('div');
  edit__modal.setAttribute('id','edit__modal');
  
  
  const edit__inner = document.createElement('div');
  edit__inner.setAttribute('id','edit__inner');
  
  const edit__close = document.createElement('button');
  edit__close.setAttribute('id','edit__close');
  edit__close.innerText = "X"
  
  
  const edit__form = document.createElement('form');
  edit__form.setAttribute('id','edit__form');
  
  const edit__title = document.createElement('h2');
  edit__title.setAttribute('id','edit__title');
  edit__title.innerText = "Editar hábito";
  
  const edit__habitTitle = document.createElement('p');
  edit__habitTitle.setAttribute('id','edit__habitTitle');
  edit__habitTitle.innerText = "Título";
  
  const edit__habitInput = document.createElement('input');
  edit__habitInput.setAttribute('id','edit__habitInput');
  edit__habitInput.placeholder = "Digitar título"; 
  
  
  const edit__description = document.createElement('p');
  edit__description.setAttribute('id','edit__description');
  edit__description.innerText = "Descrição";
  
  const edit__descriptionInput = document.createElement('input');
  edit__descriptionInput.setAttribute('id','edit__descriptionInput');
  edit__descriptionInput.placeholder = "Digitar descrição";
  
  
  const edit__category = document.createElement('p');
  edit__category.setAttribute('id','edit__category');
  edit__category.innerText = "Categoria"
  
  
  // os dados das options serão passados pela API
  const edit__select = document.createElement('select');
  edit__select.setAttribute('id','edit__select');
  edit__select.placeholder = "selecione categoria";
  
  const edit__check = document.createElement('section');
  edit__check.setAttribute('id','edit__check');
  
  const edit__status = document.createElement('p');
  edit__status.setAttribute('id','edit__status');
  edit__status.innerText = "Status";
  
  const edit__checkbox = document.createElement('input');
  edit__checkbox.setAttribute('id','edit__checkbox');
  edit__checkbox.type ="checkbox";
  
  const edit__delete = document.createElement('button');
  edit__delete.setAttribute('id','edit__delete');
  edit__delete.innerText = "Excluir";
  
  const edit__submitButton = document.createElement('button');
  edit__submitButton.setAttribute('id','edit__submitButton');
  edit__submitButton.innerText = "Salvar Alterações"
        
  
  document.getElementById('body').appendChild(edit__modal);
  
  edit__modal.appendChild(edit__inner);
  
  
  edit__inner.append(edit__close, edit__form);
  
  edit__form.append(edit__title, edit__habitTitle, edit__habitInput, edit__habitInput, edit__description, edit__descriptionInput, edit__category, edit__select, edit__check, edit__delete, edit__submitButton )
  
  edit__check.append(edit__status, edit__checkbox);
  
  
  
  
  
         
  
  
    }
       
  static closeEdit(){
      const profileEdit__modal = document.getElementById("profileEdit__modal")
      profileEdit__modal.style.display = "none"
  }

  static closeCreate(){
      const create__modal = document.getElementById("create__modal")
      create__modal.style.display = "none"
  }


  }
  
