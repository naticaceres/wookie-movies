import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Movie } from '../model/movie.model';
import { MoviesDto } from '../model/movies-dto.model';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  moviesUrl = `${environment.baseMoviesUrl}movies`;

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MoviesDto> {
    return this.http.get<MoviesDto>(this.moviesUrl);
  }

  getMoviesWithQuery(queryStr: string): Observable<MoviesDto> {
    let params = new HttpParams().set('q', queryStr);
    return this.http.get<MoviesDto>(this.moviesUrl, { params });
  }
}
