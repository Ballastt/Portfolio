import { Component } from '@angular/core';
import { MenuOverlay } from '../menu-overlay/menu-overlay';
import { AboveTheFold } from '../pages/above-the-fold/above-the-fold';
import { AboutComponent } from '../pages/about/about';
import { Skills } from '../pages/skills/skills';
import { References } from '../pages/references/references';
import { ProjectsComponent } from '../pages/projects/projects';
import { CommonModule } from '@angular/common';
import { ScrollArrow } from "../shared/scroll-arrow/scroll-arrow";

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [
    MenuOverlay,
    AboveTheFold,
    AboutComponent,
    Skills,
    References,
    ProjectsComponent,
    CommonModule,
    ScrollArrow
],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
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
