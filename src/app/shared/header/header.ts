import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() isOverlay = false;
  @Output() toggleBurger = new EventEmitter<void>();

  activeLang: string = 'de';

  setLang(lang: string) {
    this.activeLang = lang;
  }
}
