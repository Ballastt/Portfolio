import { Component, signal } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Header } from './shared/header/header';
import { MenuOverlay } from './menu-overlay/menu-overlay';
import { CommonModule } from '@angular/common';
import { Footer } from './shared/footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterModule, Header, MenuOverlay, CommonModule, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');

  burgerMenuOpen = false;
  showBackButton = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects;
        this.showBackButton =
          url.includes('/datenschutz') || url.includes('/privacy');
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
}
