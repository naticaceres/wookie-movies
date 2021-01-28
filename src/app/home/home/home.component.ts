import { Component, OnInit } from '@angular/core';
import { Movie, MOVIES_LIST } from '../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  moviesList = MOVIES_LIST;

  constructor() {}

  ngOnInit(): void {}
}
