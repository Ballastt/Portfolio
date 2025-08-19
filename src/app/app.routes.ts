import { Routes } from '@angular/router';
import { Legal } from './legal/legal';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: ':lang',
    children: [
      { path: 'home', component: Home }, // Hauptseite mit Inhalt
      { path: 'datenschutz', component: Legal }, // Datenschutzseite
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ],
  },
  { path: '', redirectTo: 'de/home', pathMatch: 'full' },
  { path: '**', redirectTo: 'de/home' },
];
