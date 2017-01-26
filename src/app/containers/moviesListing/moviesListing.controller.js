class MoviesListingController {
  constructor(MoviesService) {
    'ngInject';

    // This will keep the service instance across the class
    this.MoviesService = MoviesService;

    // this will hold moviesList, it will be passed to the other components
    this.moviesList = [];
  }

  // This method will be called each time the component will be initialised
  $onInit() {
    this.moviesList = this.MoviesService.getMovies();
  }
}

export default MoviesListingController;
