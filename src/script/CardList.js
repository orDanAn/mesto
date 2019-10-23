import {Card} from './Card';

class CardList {
  constructor (container, array) {
    this.container = container
    this.array = array
    this.render(array)
  }
  addCard (image, text, somelike, ownerId, cardId, likeId) {
    const {cardElement} = new Card(image, text, somelike, ownerId, cardId, likeId)
    this.container.appendChild(cardElement)
  }
  render () {
    for (let i = 0; i < this.array.length; i++) {
      // чтобы не дублировать свой код, сохраняй внутри тела цикла ссылку на текущий элемент
      // const currentElement = this.array[i]
      this.addCard(this.array[i].link, this.array[i].name, this.array[i].likes.length, this.array[i].owner._id, this.array[i]._id, this.array[i].likes.some(like => like._id === '82687fb710a7a00db742a691'))
    }
  }
}
export {CardList};