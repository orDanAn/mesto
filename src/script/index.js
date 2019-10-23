import '../style.css'
import {AvatarButton} from './AvatarButton';

import {ActivButton} from './ActivButton';
import {NewFormError} from './NewFormError';
import {Popup} from './Popap';
import {ActivButtonSave} from './ActivButtonSave';


import {nameEditForm} from './script';
import {jobEditForm} from './script';
import {api} from './script'; 
import {popupAvatar} from './script';
import {buttonSave} from './script';
import {popup} from './script';
import {buttonUserInfo, avatarForm, editForm, newForm, popupClose, buttonAdd, editButton, placesList, nameNewForm, linkNewForm, edit, editClose, popupImgClose, errorName, errorLink, errorEditName, errorEdidJob, avatarButton, popupAvatarClose, linkAvatarForm, errorAvatarLink, avatarSave, popupImg} from './script';













  
  // Классы разнес  в отдельные файлы
   
  
  // Вызов функций 
  api.cardApi();                          // отрисовка карт с сервера
  api.userApiStart();                      // отрисовка данный пользоват
  
  new Popup(popup, buttonUserInfo, popupClose); // запускаем класс Popap
  new Popup(edit, editButton, editClose);           // запускаем редактор формы
  new Popup(popupImg,  placesList, popupImgClose)// запускаем картинку
  new Popup(popupAvatar, avatarButton, popupAvatarClose) // запускаем замену аватара
  
  
  const startButtonadd = new ActivButton(buttonAdd, newForm); //активная кнопка добавления 
  startButtonadd.activButtonAdd(nameNewForm, linkNewForm); //делает кнопку черной
  startButtonadd.buttonAddStart(); // делает кнопку рабочей
  const errorButtonadd = new NewFormError(errorName, errorLink, newForm); // добовляем сообщения ошибок форма добовления карточек
  errorButtonadd.formNameError(nameNewForm);
  errorButtonadd.formLinkError(linkNewForm); 
  
  const errorButtonSave = new NewFormError(errorEditName, errorEdidJob, editForm); //добовляем сообщения ошибок форма edit
  errorButtonSave.formNameError(nameEditForm);
  errorButtonSave.formJobError(jobEditForm);
  
  const startButtonSave = new ActivButtonSave(buttonSave, editForm); // кнопка изменения пользователя
  startButtonSave.buttonSave();       // делает рабочей кнопку изменения пользователя
  
  const errorAvatarButton = new NewFormError(null, errorAvatarLink, avatarForm);
  errorAvatarButton.formAvatarError(linkAvatarForm);
  
  const saveAvatarButton = new AvatarButton(avatarSave, avatarForm);
  saveAvatarButton.activButtonAvatar(linkAvatarForm);
  saveAvatarButton.buttonAvatarStart(linkAvatarForm);