export class MoviesService {
  /** @ngInject */

  // private variable to store our movies entries
  constructor() {
    'ngInject';
    this.movies = [
      {
        title: "Movie 1",
        releaseDate: "2015-01-04",
        showTimes: ["2015-05-03", "2015-05-04"]
      },
      {
        title: "Movie 2",
        releaseDate: "2015-01-04",
        showTimes: ["2015-05-03", "2015-05-04"]
      }
    ];
  }

  // Will retrieve our movies list for displaying
  getMovies() {
    return this.movies;
  }
}
