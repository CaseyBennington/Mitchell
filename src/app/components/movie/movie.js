import {movieComponent} from './movie.component';
import './movie.scss';

export const movie = angular
  .module('movie', [])
  .component('movie', movieComponent)
  .name;
