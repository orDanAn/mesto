import {Api} from './API';




const serverUrl = NODE_ENV === 'development' ? 'http://praktikum.tk/cohort3' : 'https://praktikum.tk/cohort3';
// Переменные
const buttonUserInfo = document.querySelector('.user-info__button');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const buttonAdd = document.querySelector('.popup__button');
const cardContainer = document.querySelector('.places-list');
const editButton = document.querySelector('.edit__button');
const buttonSave = document.getElementById('edit__save');
const placesList = document.querySelector('.places-list');
const newForm = document.forms.new;  
const nameNewForm = newForm.elements.name; 
const linkNewForm = newForm.elements.link;
const edit = document.getElementById('popup-edit');
const editClose = document.getElementById('edit__close');
const popupImgClose = document.getElementById('popup-img__close');
const errorName = document.getElementById('error_name');
const errorLink = document.getElementById('error_link');
const errorEditName = document.getElementById("error_edit_name");
const errorEdidJob = document.getElementById("error_edit_job");

const avatarButton = document.querySelector(".user-info__photo"); //кнопка старта формы
const popupAvatar = document.getElementById("popup-avatar");      
const popupAvatarClose = document.getElementById("avatar_close");
const avatarForm = document.forms.avatar;                         // форма аватара
const linkAvatarForm = avatarForm.elements.avatar_link;           // поле формы аватара
const errorAvatarLink = document.getElementById('error_avatar_link'); // пполе ошибки 
const avatarSave = document.getElementById('avatar_save'); //кнопка сохранения аватара


const editForm = document.forms.edit;
const nameEditForm = editForm.elements.name_edit;
const jobEditForm = editForm.elements.job_edit;
const popupImg = document.getElementById('popup-img');


const api = new Api({                                               // запускаем общение с сервером
  baseUrl: serverUrl,
  headers: {
    authorization: '23e332bc-3580-4870-8eb2-a4c335951af9',
    'Content-Type': 'application/json'
  }
});
 

  
export {cardContainer};
export {nameEditForm};
export {jobEditForm};
export {api};
export {popupAvatar};
export {buttonSave};
export {popup};
export {buttonUserInfo, avatarForm, editForm, newForm, popupClose, buttonAdd, editButton, placesList, nameNewForm, linkNewForm, edit, editClose, popupImgClose, errorName, errorLink, errorEditName, errorEdidJob, avatarButton, popupAvatarClose, linkAvatarForm, errorAvatarLink, avatarSave, popupImg};
  
 

  