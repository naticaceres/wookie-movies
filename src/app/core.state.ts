import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';
import {
  movieListReducer,
  MovieListState,
} from './home/store/reducers/movie-list.reducer';
import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './router/router.state';

export interface CoreState {
  movieList: MovieListState;
  router: RouterReducerState<RouterStateUrl>;
}

export const reducers: ActionReducerMap<CoreState> = {
  movieList: movieListReducer,
  router: routerReducer,
};

export const selectRouterState = createFeatureSelector<
  CoreState,
  RouterReducerState<RouterStateUrl>
>('router');

export const {
  selectCurrentRoute, // select the current route
  //selectFragment,       // select the current route fragment
  selectQueryParams, // select the current route query params
  selectQueryParam, // factory function to select a query param
  selectRouteParams, // select the current route params
  selectRouteParam, // factory function to select a route param
  selectRouteData, // select the current route data
  selectUrl, // select the current url
} = fromRouter.getSelectors(selectRouterState);
