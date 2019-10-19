import {api} from './index';
import {cardContainer} from './index';

class Card {
    constructor(image, text, someLike, ownerId, cardId, likeId) {
            this.cardElement = this.create(image, text, someLike, ownerId, cardId, likeId);
            this.cardElement.addEventListener("click", this.remove);
            this.cardElement.addEventListener("click", this.like);
            
            }
        like() {
          
          let card = event.target.closest('.place-card');
          let likeValue = event.target.querySelector('.likeValue');

          if (event.target.classList.contains('place-card__like-icon')) {
          
          if (event.target.classList.contains('place-card__like-icon_liked')) {
          event.target.classList.remove('place-card__like-icon_liked');
          console.log('снял лайк')
          console.log(card);
          console.log(likeValue);
          likeValue.textContent = Number(likeValue.textContent) - 1;
          
          api.cardLikeDel(card.getAttribute('data-id'));
          }   
          else  {
            event.target.classList.add('place-card__like-icon_liked');
            console.log('поставил лайк')
            api.cardLikeAdd(card.getAttribute('data-id'));
            console.log(card.getAttribute('data-id'));
            likeValue.textContent = Number(likeValue.textContent) + 1;
            console.log(likeValue.textContent);
            } 
          }
        }
        remove() {
          if (event.target.classList.contains("place-card__delete-icon")) {
          let card = event.target.closest('.place-card');
          if (confirm('Точно хотите удалить карту?'))
            {cardContainer.removeChild(card);
            //console.log(card);
            console.log(card.getAttribute('data-id'));
            //console.log(event.target);
            api.cardDell(card.getAttribute('data-id'))
            }

          }
        }
        create(imageValue, textValue, likeValue, ownerId, cardId, likeId) {
          const card = document.createElement('div');
          const cardImageElement = document.createElement('div');
          const delIcon = document.createElement('button');
          const cardDescription = document.createElement('div');
          const cardNameElement = document.createElement('h3');
          const buttonLike = document.createElement('button');
          const someLike = document.createElement('p');
          //const idCard = document.createElement('div');

  
          card.classList.add('place-card');
          card.setAttribute(`data-id`,`${cardId}`);
          cardImageElement.classList.add('place-card__image');
          cardImageElement.setAttribute('style', `background-image: url(${imageValue})`);

          
              
          cardDescription.classList.add('place-card__description');
          cardNameElement.classList.add('nitialplace-card__name');
          cardNameElement.textContent = textValue;
          buttonLike.classList.add('place-card__like-icon');
          card.appendChild(cardImageElement);
          if (ownerId === '82687fb710a7a00db742a691') {
              cardImageElement.appendChild(delIcon);
              delIcon.classList.add('place-card__delete-icon');
          }
          if (likeId === true) {
            buttonLike.classList.add('place-card__like-icon_liked')
            console.log('есть совпадение')
          }
          card.appendChild(cardDescription);
          
          cardDescription.appendChild(cardNameElement);
          cardDescription.appendChild(buttonLike);
          buttonLike.appendChild(someLike);
          someLike.textContent = likeValue;
          someLike.classList.add('likeValue')

          
    
            
          
          return card;
        }
  }

  export {Card};