import { Component, signal } from '@angular/core';
import { Header } from './shared/header/header';
import { Footer } from './shared/footer/footer';
import { AboveTheFold } from "./pages/home/above-the-fold/above-the-fold";
import { AboutComponent } from "./pages/about/about";
import { Skills } from "./pages/skills/skills";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Header, Footer, AboveTheFold, AboutComponent, Skills, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('portfolio');
}
