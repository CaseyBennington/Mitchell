import template from './moviesList.html';
import controller from './moviesList.controller';

const moviesListComponent = {
  restrict: 'E',
  bindings: {
    movies: '<'
  },
  template,
  controller,
  controllerAs: 'vm'
};

export default moviesListComponent;
