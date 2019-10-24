import {api} from './script';
import {popupAvatar} from './script';

class AvatarButton {
  constructor(buttonAvatar, avatarForm) {
    this.buttonAvatar = buttonAvatar;                                   // валидация формы добавления карточки
    this.avatarForm = avatarForm;
    buttonAvatar.setAttribute('disabled', true)
    buttonAvatar.classList.remove('popup__button_activ');
    
  }  

      activButtonAvatar(linkAvatarForm) {
        this.avatarForm.addEventListener('input', () => {
        
        if ( linkAvatarForm.checkValidity() && (linkAvatarForm.value.length !== 0)) {
          this.buttonAvatar.removeAttribute('disabled');
          this.buttonAvatar.classList.add('popup__button_activ');
          
        }
    
        else {
          this.buttonAvatar.setAttribute('disabled', true)
          this.buttonAvatar.classList.remove('popup__button_activ');
        } 
      });
  
  }

        buttonAvatarStart(linkAvatarForm) {
          this.buttonAvatar.addEventListener('click', (event) => {
          event.preventDefault();
          const avatarImage = document.querySelector('.user-info__photo');
          avatarImage.setAttribute('style', `background-image: url(${linkAvatarForm.value})`)
          api.avatarApi(linkAvatarForm.value);
          popupAvatar.classList.remove('popup_is-opened');
          this.buttonAvatar.setAttribute('disabled', true)
          this.buttonAvatar.classList.remove('popup__button_activ');
          linkAvatarForm.value = "";
        
          });
        }


  }

  export {AvatarButton};