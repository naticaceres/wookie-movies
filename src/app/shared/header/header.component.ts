import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  @HostListener('window:scroll', []) onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  constructor() {}

  ngOnInit(): void {}
}
