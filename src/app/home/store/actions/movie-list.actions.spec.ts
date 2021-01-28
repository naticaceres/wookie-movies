import * as fromMovieList from './movie-list.actions';

describe('loadMovieLists', () => {
  it('should return an action', () => {
    expect(fromMovieList.loadMovieLists().type).toBe('[MovieList] Load MovieLists');
  });
});
