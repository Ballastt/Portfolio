import { Routes } from '@angular/router';
import { Legal } from './legal/legal';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'datenschutz', component: Legal },
  { path: 'impressum', component: Legal }, // For English version
  { path: '**', redirectTo: '', pathMatch: 'full' }
];