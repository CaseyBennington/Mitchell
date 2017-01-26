import MoviesListModule from './moviesList';
import MoviesListController from './moviesList.controller';
import MoviesListComponent from './moviesList.component';
import MoviesListTemplate from './moviesList.html';

describe('MoviesList', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(MoviesListModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoviesListController();
    };
  }));

  describe('Template', () => {
    it('It renders the movie component', () => {
      expect(MoviesListTemplate).to.match(/movie/g);
    });
  });

  describe('Component', () => {
    const component = MoviesListComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MoviesListTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MoviesListController);
    });
  });
});
