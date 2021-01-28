import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements OnInit {
  @Input() isScrolled = false;
  @Output() ctaClicked = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  openInNewTab(url: string) {
    window.open(url, '_blank');
  }
}
