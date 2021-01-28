import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @HostListener('window:scroll', []) onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  isScrolled = false;

  constructor() {}

  ngOnInit(): void {}
}
