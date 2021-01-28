import { Component, HostListener, OnInit } from '@angular/core';
import { Movie, MOVIES_LIST } from '../model/movie.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @HostListener('window:scroll', ['$event']) onWindowScroll(event: any) {
    let see = event;
    this.isScrolled = window.scrollY > 0;
  }

  isScrolled = false;
  moviesList = MOVIES_LIST;

  constructor() {}

  ngOnInit(): void {}

  onScroll(event: Event) {
    this.isScrolled = true;
  }
}
