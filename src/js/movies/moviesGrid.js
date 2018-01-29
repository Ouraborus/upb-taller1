export class MoviesGrid {
  constructor (section, data) {
    this.node = document.querySelector(section)
    this.elements = {}
    this.dataLength = data.length

    this.setCardsShell(data)
  }

  static get cardsShell () {
    return {
      shell: (`<li class="movies-grid__container">
        <img class="movies-grid__element" src="{url}" data-category="{category}" alt=""/>
        <div class="movies-grid__description">
        <p>{description}</p>
        </div>
    </li>`)
    }
  }

  setCardsShell (data) {
    let gridData = ''
    data.forEach(element => {
      gridData += MoviesGrid.cardsShell.shell.replace('{url}', element.url).replace('{category}', element.category).replace('{description}', element.description)
    })
    this.node.innerHTML += gridData
    this.elements.movies = this.node.querySelectorAll('.movies-grid__container')
    this.elements.movies.tabIndex = 0
  }
  updateGrid (data) {
    if (data === 'All') {
      this.elements.movies.forEach(element => {
        element.classList.remove('movies-grid__hidden')
      })
    } else {
      this.elements.movies.forEach(element => {
        if (element.children[0].dataset.category !== data) {
          element.classList.add('movies-grid__hidden')
        } else {
          element.classList.remove('movies-grid__hidden')
        }
      })
    }
  }
}
