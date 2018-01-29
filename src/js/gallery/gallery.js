export class Gallery {
  constructor (element, img) {
    this.node = document.querySelector(element)
    this.index = 0
    this.elements = {}

    this.setGalleryStructure()
    this.fillGallery(img)
    this.setDots()
    this.setArrows()
    this.reveal(0, 0)
  }

  static get galleryStructure () {
    return {
      arrows: (
                `<button class="arrow arrow__left">
                </button>
                <button class="arrow arrow__right">
                </button>`),
      gallery: (
                `<img src="{src}" alt="" class="gallery__image hidden">`
            ),
      dots: (
        `<div class="dot">
        </div>`
      ),
      dot: (
        `<button class="dot__element"></button>`
    )
    }
  }

  setGalleryStructure () {
    this.node.innerHTML = Gallery.galleryStructure.arrows + Gallery.galleryStructure.dots
    this.node.tabIndex = 0
  }

  setArrows () {
    this.elements.leftArrow = this.node.querySelector('.arrow__left')
    this.elements.rightArrow = this.node.querySelector('.arrow__right')

    this.elements.leftArrow.addEventListener('click', this.prev.bind(this))
    this.elements.rightArrow.addEventListener('click', this.next.bind(this))
    this.node.addEventListener('keydown', this.keyHandler.bind(this))
  }
  next () {
    if (this.index < this.elements.gallery.length - 1) {
      const index = this.index
      const next = ++this.index
      this.reveal(index, next)
      this.selectedItem(index, next)
    }
  }
  prev () {
    if (this.index > 0) {
      const index = this.index
      const prev = --this.index
      this.reveal(index, prev)
      this.selectedItem(index, prev)
    }
  }
  keyHandler (e) {
    const key = e.key
    if (key === 'ArrowLeft' || key === 'ArrowRight') {
      if (key === 'ArrowLeft') {
        this.prev()
      } else {
        this.next()
      }
    }
  }

  fillGallery (data) {
    data.map(element => {
      this.node.innerHTML += Gallery.galleryStructure.gallery.replace('{src}', element.url)
    })
    this.elements.gallery = this.node.querySelectorAll('.gallery__image')
  }
  setDots () {
    const string = Gallery.galleryStructure.dot
    const dots = [...this.elements.gallery].map(() => {
      return string
    }).join('')
    this.node.querySelector('.dot').innerHTML = dots
    this.elements.dots = this.node.querySelectorAll('.dot__element')

    this.elements.dots.forEach(element => {
      element.addEventListener('click', this.dotClick.bind(this))
    })
    this.elements.dots[0].classList.add('dot__element--selected')
  }
  dotClick () {
    /* eslint-disable */
    const reveal = [...this.elements.dots].indexOf(event.target)
    /* eslint-enable */
    this.reveal(this.index, reveal)
    this.selectedItem(this.index, reveal)
    this.index = reveal
  }
  reveal (hide, reveal) {
    this.elements.gallery[hide].classList.add('hidden')
    this.elements.gallery[reveal].classList.remove('hidden')
    this.arrowVisibility(reveal)
  }
  selectedItem (index, reveal) {
    this.elements.dots[index].classList.remove('dot__element--selected')
    this.elements.dots[reveal].classList.add('dot__element--selected')
    this.elements.dots[reveal].focus()
  }
  arrowVisibility (index) {
    this.elements.rightArrow.classList.remove('hidden')
    this.elements.leftArrow.classList.remove('hidden')
    if (index === 0) {
      this.elements.leftArrow.classList.toggle('hidden')
    }
    if (index === this.elements.dots.length - 1) {
      this.elements.rightArrow.classList.toggle('hidden')
    }
  }
}
