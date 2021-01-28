import { Action, createFeatureSelector, createReducer, on } from '@ngrx/store';
import { Movie } from '../../model/movie.model';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as MovieListActions from '../actions/movie-list.actions';
import { CoreState } from 'src/app/core.state';
//import { selectMovieListState } from 'src/app/core.state';

export const movieListFeatureKey = 'movieList';

export const selectMovieListState = createFeatureSelector<
  CoreState,
  MovieListState
>('movieList');

export function sortByDate(a: Movie, b: Movie): number {
  return -a.released_on.localeCompare(b.released_on);
}

export interface MovieListState extends EntityState<Movie> {
  genres: string[];
  isLoaded: boolean;
  isLoading: boolean;
  isError: boolean;
}

export const movieListAdapter: EntityAdapter<Movie> = createEntityAdapter<Movie>(
  {
    sortComparer: sortByDate,
  }
);

export const initialState: MovieListState = movieListAdapter.getInitialState({
  genres: [],
  isLoaded: false,
  isLoading: false,
  isError: false,
});

export const movieListReducer = createReducer(
  initialState,
  on(MovieListActions.loadMovieLists, (state, action) => ({
    ...state,
    isLoading: true,
    isLoaded: false,
    isError: false,
  })),
  on(MovieListActions.loadMovieListsSuccess, (state, action) =>
    movieListAdapter.setAll(action.data, {
      ...state,
      isLoading: false,
      isLoaded: true,
      genres: action.data
        .map((d) => d.genres)
        .reduce(
          (accumulator, current, index, array) => accumulator.concat(current),
          []
        )
        .filter((value, index, array) => array.indexOf(value) === index),
    })
  ),
  on(MovieListActions.loadMovieListsFailure, (state, action) =>
    movieListAdapter.removeAll({
      ...state,
      isLoading: false,
      isLoaded: false,
      isError: true,
    })
  )
);

export const { selectAll } = movieListAdapter.getSelectors(
  selectMovieListState
);
