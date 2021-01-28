import { movieListReducer, initialState } from './movie-list.reducer';

describe('MovieList Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = movieListReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
