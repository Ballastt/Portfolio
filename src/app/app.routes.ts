import { Routes } from '@angular/router';
import { Legal } from './legal/legal';
import { Home } from './home/home';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'home', component: Home },
  { path: 'datenschutz', component: Legal },
  { path: 'impressum', component: Legal }, 
  { path: 'privacy', component: Legal },
  { path: 'imprint', component: Legal },
  { path: '404', component: NotFound },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];