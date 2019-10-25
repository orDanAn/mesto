import {api} from './script';
import {popup} from './script';


export class ActivButton {
  constructor (buttonAdd, newForm) {
    this.buttonAdd = buttonAdd; // валидация формы добавления карточки
    this.newForm = newForm;
    buttonAdd.setAttribute('disabled', true);
    buttonAdd.classList.remove('popup__button_activ');
  }

  activButtonAdd (nameForm, linkNewForm) {
    this.newForm.addEventListener('input', () => {
      if (nameForm.checkValidity() && linkNewForm.checkValidity() && !(nameForm.value.length !== 0 && nameForm.value.length < 2) && !(nameForm.value.length > 30)) {
        this.buttonAdd.removeAttribute('disabled');
        this.buttonAdd.classList.add('popup__button_activ');
      } else {
        this.buttonAdd.setAttribute('disabled', true);
        this.buttonAdd.classList.remove('popup__button_activ');
      }
    })
  }
  buttonAddStart () {
    this.buttonAdd.addEventListener('click', (event) => {
      event.preventDefault();
      const cardImage = document.querySelector('.popup__input_type_link-url');
      const cardName = document.querySelector('.popup__input_type_name');
      api.cardAddApi(cardName.value, cardImage.value);
      cardImage.value = '';
      cardName.value = '';
      popup.classList.remove('popup_is-opened');
      this.buttonAdd.setAttribute('disabled', true);
      this.buttonAdd.classList.remove('popup__button_activ');
    })
  }
}

