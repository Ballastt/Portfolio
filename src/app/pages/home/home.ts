import { Component } from '@angular/core';
import { Header } from '../../shared/header/header';
import { AboutComponent } from '../about/about';
import { AboveTheFold } from '../home/above-the-fold/above-the-fold';
import { Footer } from "../../shared/footer/footer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Header, AboveTheFold, AboutComponent, Footer],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  constructor() {
    // Initialization logic can go here
  }

}
