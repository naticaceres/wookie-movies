import { Movie } from './movie.model';

export interface MoviesByGenre {
  genre: string;
  movies: Movie[];
}
