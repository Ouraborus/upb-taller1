import { MoviesFilter } from './moviesFilter.js'
import { MoviesGrid } from './moviesGrid.js'
import Controller from './Controller.js'
import styles from '../../sass/main.scss'

// import moviesData from './moviesData.js'

const URL = 'https://api.myjson.com/bins/8pu21'

Controller.get(URL, data => init(data))

function init (movies) {
    /* eslint-disable */
    const grid = new MoviesGrid('.movies-grid', movies)
    new MoviesFilter('.movies-filter', movies, grid)
    /* eslint-enable */
}
