import moviesListComponent from './moviesList.component';
import {movie} from '../movie/movie';

const moviesListModule = angular.module('moviesList', [
  movie
])
.component('moviesList', moviesListComponent);

export default moviesListModule.name;
