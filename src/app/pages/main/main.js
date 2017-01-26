import mainComponent from './main.component';
import {chart as chartComponentModule} from '../../components/chart/chartModule';
import moviesListing from '../../containers/moviesListing/moviesListing';

const main = angular.module('main', [
  moviesListing,
  chartComponentModule
])
.component('main', mainComponent);

export default main.name;
