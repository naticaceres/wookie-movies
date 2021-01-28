import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/home/model/movie.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent implements OnInit {
  @Input() movies: Movie[] = [];
  isExpanded = false;
  constructor() {}

  ngOnInit(): void {}

  identifyMovie(index: number, item: Movie) {
    return item.id;
  }

  isOverflow(clientWidth: number, scrollWidth: number) {}
}
