import { createSelector } from '@ngrx/store';
import * as MovieListReducer from '../reducers/movie-list.reducer';
import { Movie } from '../../model/movie.model';

export const movieListState = createSelector(
  MovieListReducer.selectMovieListState,
  (state) => state
);

export const selectAllMovies = createSelector(
  MovieListReducer.selectAll,
  (movies) => movies
);

export const selectMoviesByGenre = createSelector(
  MovieListReducer.selectAll,
  (movies: Movie[], props: { genre: string }) =>
    movies.filter((m) => m.genres.some((g) => g === props.genre))
);

export const selectGenres = createSelector(
  movieListState,
  (state) => state.genres
);

export const selectIsLoading = createSelector(
  movieListState,
  (state) => state.isLoading
);

export const selectIsLoaded = createSelector(
  movieListState,
  (state) => state.isLoaded
);
