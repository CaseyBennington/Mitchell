import moviesListingComponent from './moviesListing.component';
import moviesList from '../../components/moviesList/moviesList';

const moviesListing = angular.module('moviesListing', [
  moviesList
])
.component('moviesListing', moviesListingComponent);

export default moviesListing.name;
