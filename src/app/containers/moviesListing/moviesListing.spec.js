import MoviesListingModule from './moviesListing';
import MoviesListingController from './moviesListing.controller';
import MoviesListingComponent from './moviesListing.component';
import MoviesListingTemplate from './moviesListing.html';

describe('MoviesListing', () => {
  let $rootScope;
  let makeController;

  beforeEach(window.module(MoviesListingModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new MoviesListingController();
    };
  }));

  describe('Template', () => {
    it('renders movie-list component', () => {
      expect(MoviesListingTemplate).to.match(/<movies-list/g);
    });

    it('passes moviesList to movie-list component', () => {
      expect(MoviesListingTemplate).to.match(/movies="vm\.moviesList"/g);
    });
  });

  describe('Component', () => {
    const component = MoviesListingComponent;

    it('includes the intended template', () => {
      expect(component.template).to.equal(MoviesListingTemplate);
    });

    it('uses `controllerAs` syntax', () => {
      expect(component).to.have.property('controllerAs');
    });

    it('invokes the right controller', () => {
      expect(component.controller).to.equal(MoviesListingController);
    });
  });
});
