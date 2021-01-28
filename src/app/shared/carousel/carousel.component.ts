import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/home/model/movie.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {}
}
