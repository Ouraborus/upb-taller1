export class MoviesFilter {
  constructor (section, data, grid) {
    this.node = document.querySelector(section)
    this.elements = {}
    this.grid = grid
    this.setFilter(this.filterCategories(data))
    this.selectedCategory = this.node.querySelector(`.movies-filter__element--selected`)
    this.setButtons()
  }

  static get filterStr () {
    return {
      shell: (
    `<li><button class="movies-filter__element" data-category="{category}">{category}</button></li>`
    ),
      element: (
    `movies-filter__element--selected`
  )}
  }

  filterCategories (data) {
    const categories = []
    data.forEach(element => {
      if (!categories.includes(element.category)) {
        categories.push(element.category)
      }
    })
    return categories
  }
  setFilter (data) {
    let filterData = ''
    data.forEach(element => {
      filterData += MoviesFilter.filterStr.shell.replace('{category}', element).replace('{category}', element)
    })
    this.node.innerHTML += filterData
    this.elements.categories = this.node.querySelectorAll('.movies-filter__element')
    this.elements.categories[0].classList.add(MoviesFilter.filterStr.element)
    this.elements.categories.tabIndex = 0
  }

  updateViewport (evt) {
    this.updateFilter(this.selectedCategory, evt.currentTarget)
    this.selectedCategory = evt.currentTarget
    this.grid.updateGrid(this.selectedCategory.dataset.category)
    this.grid.flipCard('reset')
  }
  setButtons () {
    this.elements.categories.forEach(element => {
      element.addEventListener('click', this.updateViewport.bind(this))
    })
  }
  updateFilter (oldButton, newButton) {
    oldButton.classList.remove(MoviesFilter.filterStr.element)
    newButton.classList.add(MoviesFilter.filterStr.element)
  }
}
