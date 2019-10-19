import {CardList} from './class_CardList';
import {cardContainer} from './index';

class Api {
  constructor (options) {
    this.options = options
  }

  userApiStart () {
    // тут в общем сама логика не совсем верная. тебе нельзя манипулировать данными внутри класса АПИ, потому что этот класс отвечает только за получение и отправку данных. мы обсуждали это в тредах, и там должно быть сделано таким образом, что после создания экземпляра класса ты вызываешь метод этого экземпляра и дальне работаешь с данными уже в другом месте:

    // const api = new Api (...)
    // api.userApiStart(...).then(...)
    // по всем остальным методам тоже самое

    fetch(`${this.options.baseUrl}/users/me`, {
      headers: this.options.headers
    })

      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then((result) => {
        // console.log(result);                                                    // загрузка данных пользователя с сервера
        let user = result

        // console.log(user.about, user.name);

        const userInfoName = document.querySelector('.user-info__name')
        const userInfoJob = document.querySelector('.user-info__job')
        const avatarImage = document.querySelector('.user-info__photo')
        avatarImage.setAttribute('style', `background-image: url(${user.avatar})`)
        userInfoName.textContent = user.name
        userInfoJob.textContent = user.about
      })
      .catch((err) => {
        console.log(err)
      })
  }

  cardApi () {
    fetch(`${this.options.baseUrl}/cards`, {
      headers: this.options.headers
    })

      .then((res) => {
        if (res.ok) { // запрос загруженных кар на сервер
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then((result) => {
        new CardList(cardContainer, result)
        return result
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  redactorUserApi (name, about) {
    fetch(`${this.options.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.options.headers,
      body: JSON.stringify({
        name: `${name}`, // отправка на сервер имени и работы пользователя из формы
        about: `${about}`
      })

    })
  }

  cardAddApi (name, link) {
    fetch(`${this.options.baseUrl}/cards`, {

      method: 'POST',
      headers: {
        authorization: '23e332bc-3580-4870-8eb2-a4c335951af9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: `${name}`, // отправка на сервер новой карты
        link: `${link}`
      })

    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
        return Promise.reject(`Ошибка: ${res.status}`)
      })
      .then((result) => {
        // console.log(`${result.name}, ${result.link}`)
        return result
      }) // отрисовка новой карты
      .then((result) => {
        let card = new CardList(cardContainer, [])
        card.addCard(result.link, result.name)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  cardLike () {
    fetch(`${this.options.baseUrl}/cards`, { // отрисовка лайков

      headers: {
        authorization: '23e332bc-3580-4870-8eb2-a4c335951af9'
      }
    })
      .then((res) => {
        if (res.ok) {
          return res.json()
        }
      })
    return Promise.reject(`Ошибка: ${res.status}`)
      .then((res) => {
        for (let i = 0; i < res.length; i++) { console.log(res[i].likes.length) }
        return res
      })
      .catch((err) => {
        console.log(err)
      })
  }

  cardDell (idCard) {
    fetch(`${this.options.baseUrl}/cards/${idCard}`, { // удаление карт
      method: 'DELETE',
      headers: {
        authorization: '23e332bc-3580-4870-8eb2-a4c335951af9',
        'Content-Type': 'application/json'
      }

    })
  }
  cardLikeAdd (idCard) {
    fetch(`${this.options.baseUrl}/cards/like/${idCard}`, { // добовляем лайк

      method: 'PUT',
      headers: {
        authorization: '23e332bc-3580-4870-8eb2-a4c335951af9',
        'Content-Type': 'application/json'
      }
    })
  }
  cardLikeDel (idCard) {
    fetch(`${this.options.baseUrl}/cards/like/${idCard}`, { // удаляем лайк
      method: 'DELETE',
      headers: {
        authorization: '23e332bc-3580-4870-8eb2-a4c335951af9',
        'Content-Type': 'application/json'
      }

    })
  }

  avatarApi (avatarImg) {
    fetch(`${this.options.baseUrl}/users/me/avatar`, { // смена картинки аватара
      method: 'PATCH',
      headers: {
        authorization: '23e332bc-3580-4870-8eb2-a4c335951af9',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        avatar: `${avatarImg}`

      })
    })
  }
}

export {Api};
