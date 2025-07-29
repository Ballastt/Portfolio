import { Component, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { AboveTheFold } from './pages/above-the-fold/above-the-fold';
import { AboutComponent } from './pages/about/about';
import { Skills } from './pages/skills/skills';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from './pages/projects/projects';
import { References } from './pages/references/references';
import { MenuOverlay } from './menu-overlay/menu-overlay';

@Component({
  selector: 'app-root',
  imports: [
    Header,
    Footer,
    AboveTheFold,
    AboutComponent,
    Skills,
    CommonModule,
    ProjectsComponent,
    References,
    MenuOverlay,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('portfolio');

  burgerMenuOpen = false;

  toggleMenu() {
    this.burgerMenuOpen = !this.burgerMenuOpen;
    document.body.style.overflow = this.burgerMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.burgerMenuOpen = false;
    document.body.style.overflow = '';
  }
}
