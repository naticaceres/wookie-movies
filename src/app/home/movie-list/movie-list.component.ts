import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, mergeMap, withLatestFrom } from 'rxjs/operators';
import { CoreState } from 'src/app/core.state';
import { MoviesByGenre } from '../model/movies-by-gender-dto.model';
import { loadMovieLists } from '../store/actions/movie-list.actions';

import * as MovieListSelectors from '../store/selectors/movie-list.selectors';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  genres$: Observable<string[]> | undefined;
  moviesByGenre$: Observable<MoviesByGenre[]> | undefined;
  isLoading$: Observable<boolean> | undefined;
  isLoaded$: Observable<boolean> | undefined;

  constructor(private store: Store<CoreState>) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(MovieListSelectors.selectIsLoading);
    this.isLoaded$ = this.store.select(MovieListSelectors.selectIsLoaded);
    this.genres$ = this.store.select(MovieListSelectors.selectGenres);
    this.moviesByGenre$ = this.genres$.pipe(
      withLatestFrom(this.store.select(MovieListSelectors.selectAllMovies)),
      map(([genres, movies]) => {
        return genres.map<MoviesByGenre>((g) => ({
          genre: g,
          movies: movies.filter((m) =>
            m.genres.some((movieGenre) => movieGenre === g)
          ),
        }));
      })
    );

    this.store.dispatch(loadMovieLists());
  }
}
