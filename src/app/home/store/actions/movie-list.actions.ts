import { createAction, props } from '@ngrx/store';
import { Movie } from '../../model/movie.model';

export const loadMovieLists = createAction('[MovieList] Load MovieLists');

export const loadMovieListsSuccess = createAction(
  '[MovieList] Load MovieLists Success',
  props<{ data: Movie[] }>()
);

export const loadMovieListsFailure = createAction(
  '[MovieList] Load MovieLists Failure',
  props<{ error: any }>()
);
