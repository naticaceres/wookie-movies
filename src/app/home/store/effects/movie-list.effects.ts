import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { MoviesService } from '../../services/movies.service';
import * as MovieListActions from '../actions/movie-list.actions';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class MovieListEffects {
  constructor(private actions$: Actions, private movieService: MoviesService) {}

  loadMoviesEffect = createEffect(
    () =>
      this.actions$.pipe(
        ofType(MovieListActions.loadMovieLists),
        switchMap(() =>
          this.movieService.getMovies().pipe(
            map((moviesDto) =>
              MovieListActions.loadMovieListsSuccess({
                data: moviesDto.movies,
              })
            ),
            catchError((error) =>
              of(MovieListActions.loadMovieListsFailure({ error }))
            )
          )
        )
      )
    //{ dispatch: false }
  );
}
