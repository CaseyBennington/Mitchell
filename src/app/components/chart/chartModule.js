import {chartComponent} from './chart.component';
import './chart.scss';

export const chart = angular
  .module('chartComponentModule', ['chart.js'])
  .component('chart', chartComponent)
  .name;
