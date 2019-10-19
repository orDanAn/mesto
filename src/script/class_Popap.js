class Popup {
  constructor (container, buttonOpen, buttonClose) {
    this.container = container
    this.buttonOpen = buttonOpen
    this.buttonClose = buttonClose

    this.open = this.open.bind(this)
    this.close = this.close.bind(this)

    buttonOpen.addEventListener('click', this.open)
    buttonClose.addEventListener('click', this.close)
    // очень все плохо с форматированием, сравни вот код в таком состоянии с тем, что у тебя было в файле до моей проверки
  }
  open () {
    if (this.buttonOpen === event.target) {
      this.container.classList.add('popup_is-opened')
    }
    if (event.target.classList.contains('place-card__image')) {
      if (event.target.getAttribute('style')) {
        this.container.classList.add('popup_is-opened')

        let urlBackgroundImage = event.target.style.backgroundImage.split('"')
        let srcPopupImg = urlBackgroundImage[1]
        document.getElementById('popup_img-address').setAttribute('src', `${srcPopupImg}`) // Показываем большую картинку
      }
    }
  };
  close () {
    this.container.classList.remove('popup_is-opened')
  }
}
export {Popup};