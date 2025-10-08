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
  showBackButton = false;
  showFooter = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;

        // Show back button for ALL legal pages
        this.showBackButton =
          url.includes('/datenschutz') ||
          url.includes('/privacy') ||
          url.includes('/impressum');

        // Footer nur anzeigen, wenn NICHT auf diesen Routen
        const hiddenFooterRoutes = ['/datenschutz', '/privacy', '/impressum'];
        this.showFooter = !hiddenFooterRoutes.some((route) =>
          url.includes(route)
        );

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
