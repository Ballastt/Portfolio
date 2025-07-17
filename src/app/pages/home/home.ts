import { Component } from '@angular/core';
import { AboveTheFold } from './above-the-fold/above-the-fold';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboveTheFold],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  constructor() {
    // Initialization logic can go here
  }

}
