import { MoviesFilter } from './moviesFilter.js'
import { MoviesGrid } from './moviesGrid.js'
import moviesData from './moviesData.js'
/* eslint-disable */
const grid = new MoviesGrid('.movies-grid', moviesData)
new MoviesFilter('.movies-filter', moviesData, grid)
/* eslint-enable */
