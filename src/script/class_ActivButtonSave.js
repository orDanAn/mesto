import {nameEditForm} from './index';
import {jobEditForm} from './index';
import {api} from './index';
import {buttonSave} from './index';


class ActivButtonSave {
  constructor (button, form) { // Валидация формы изменения пользователя
    this.button = button;
    this.form = form

    form.addEventListener('input', this.activButtonSave);

    this.startFormEdit();

    this.buttonSave = this.buttonSave.bind(this);
  }

  activButtonSave () {
    // у тебя в конструкторе сохранена ссылка на form
    // чтобы не плодить глобальные переменные ты можешь динамически обращаться к полям этой формы
    // this.form.querySelector, например, или через form.elements

    if (nameEditForm.value.length === 0 || nameEditForm.value.length < 2 || nameEditForm.value.length > 30 || jobEditForm.value.length === 0 ||
          jobEditForm.value.length < 2 || jobEditForm.value.length > 30) {
      buttonSave.setAttribute('disabled', true)
      buttonSave.classList.remove('popup__button_activ')
    } else {
      buttonSave.removeAttribute('disabled')
      buttonSave.classList.add('popup__button_activ')
    }
    
  }

  startFormEdit () {
    this.button.classList.remove('popup__button_activ')
    this.button.setAttribute('disabled', true)
  

  }

  buttonSave () {
    this.button.addEventListener('click', (event) => {
      event.preventDefault()

      const editName = document.getElementById('edit_name')
      const editJob = document.getElementById('edit_job')
      const userInfoName = document.querySelector('.user-info__name')
      const userInfoJob = document.querySelector('.user-info__job')
      userInfoName.textContent = editName.value
      userInfoJob.textContent = editJob.value
      api.redactorUserApi(editName.value, editJob.value) // отправка данных на сервер
      document.getElementById('popup-edit').classList.remove('popup_is-opened')
      this.button.classList.remove('popup__button_activ')
      this.button.setAttribute('disabled', true)
    })
  }
}
export {ActivButtonSave};