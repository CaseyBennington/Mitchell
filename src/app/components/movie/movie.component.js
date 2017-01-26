'use strict';

import template from './movie.html';

export const movieComponent = {
  restrict: 'E',
  bindings: {
    movie: '<'
  },
  template,
  controller: class MovieComponent {
    constructor() {
      'ngInject';
    }
  },
  controllerAs: 'vm'
};
