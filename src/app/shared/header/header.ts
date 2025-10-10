import { Component, EventEmitter, Input, Output, OnInit, LOCALE_ID, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  @Input() isOverlay = false;
  @Input() isLegalPage = false;
  @Output() toggleBurger = new EventEmitter<void>();

  activeLang: string = 'de';

  constructor(@Inject(LOCALE_ID) private locale: string, private router: Router) {}

  ngOnInit(): void {
    // Set active language based on current locale
    this.activeLang = this.locale === 'en' ? 'en' : 'de';
    console.log('Current locale:', this.locale);
    console.log('Active lang set to:', this.activeLang);
  }

  navigateToHome(): void {
    // If we're in overlay mode, close the menu first
    if (this.isOverlay) {
      this.toggleBurger.emit();
    }
    this.router.navigate(['/']);
  }

  setLang(lang: string): void {
    console.log('setLang called with:', lang);
    console.log('Current activeLang:', this.activeLang);
    
    if (lang === this.activeLang) {
      console.log('Same language, not switching');
      return;
    }
    
    this.switchLanguage(lang);
  }

  private switchLanguage(lang: string): void {
    const currentPath = window.location.pathname;
    console.log('Current path:', currentPath);
    
    if (lang === 'de') {
      // Switch to German (served from root)
      if (currentPath.startsWith('/en')) {
        const pathWithoutEn = currentPath.replace('/en', '');
        const newPath = pathWithoutEn || '/';
        console.log('Switching to German:', newPath);
        window.location.href = newPath;
      } else {
        console.log('Already on German version');
        window.location.href = '/';
      }
    } else {
      // Switch to English (served from /en)
      if (!currentPath.startsWith('/en')) {
        const newPath = `/en${currentPath === '/' ? '' : currentPath}`;
        console.log('Switching to English:', newPath);
        window.location.href = newPath;
      } else {
        console.log('Already on English version');
      }
    }
  }
}