import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './shared/header/header';
import { MenuOverlay } from './menu-overlay/menu-overlay';
import { CommonModule } from '@angular/common';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterModule, MenuOverlay, CommonModule, Header, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'],
})
export class App {
  burgerMenuOpen = false;
  showFooter = true;
  isLegalPage = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;

        // Check if we're on legal pages
        const legalRoutes = ['/datenschutz', '/privacy', '/impressum'];
        this.isLegalPage = legalRoutes.some((route) => url.includes(route));

        // Footer nur anzeigen, wenn NICHT auf diesen Routen  
        this.showFooter = !this.isLegalPage;

        // Scroll für ALLE legal pages nach oben
        if (
          url.includes('/datenschutz') ||
          url.includes('/privacy') ||
          url.includes('/impressum')
        ) {
          window.scrollTo(0, 0);
        }
      });
  }

  toggleMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
    document.body.style.overflow = this.burgerMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.burgerMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollToSection(section: 'about' | 'skills' | 'projects') {
    // If we're on a legal page, navigate to home first
    if (this.isLegalPage) {
      this.router.navigate(['/']).then(() => {
        // Wait for the home page to load, then scroll
        setTimeout(() => {
          this.performScroll(section);
        }, 100);
      });
    } else {
      // We're already on home page, scroll directly
      this.performScroll(section);
    }
  }

  private performScroll(section: 'about' | 'skills' | 'projects') {
    const el = document.getElementById(section);
    if (!el) return;

    // Unterschiedliche Offsets für jede Sektion
    let headerOffset = 0;
    switch (section) {
      case 'about':
        headerOffset = 120; // z.B. 120px von oben
        break;
      case 'skills':
        headerOffset = -100;
        break;
      case 'projects':
        headerOffset = -100;
        break;
    }

    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}
