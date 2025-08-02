import { Component, Output, Input, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Input() isOverlay = false;
  @Input() showBackButton = false;
  @Output() toggleBurger = new EventEmitter<void>();

  activeLang: string = 'de';

  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/de/home']);
  }

  setLang(lang: string) {
    this.activeLang = lang;
  }
}
