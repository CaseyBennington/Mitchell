import 'bootstrap/dist/css/bootstrap.css';
import angular from 'angular';

import {App} from './app/containers/App';
import main from './app/pages/main/main';
import {MoviesService} from './app/services/MoviesService';

import 'angular-ui-bootstrap';
import 'angular-ui-router';
import routesConfig from './routes';

import './index.scss';

angular
  .module('app', ['ui.router', main, 'ui.bootstrap'])
  .config(routesConfig)
  .service('MoviesService', MoviesService)
  .component('app', App);
