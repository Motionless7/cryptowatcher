import { Routes } from '@angular/router';
import { CoinListComponent } from './components/coin-list/coin-list.component';

export const appRoutes: Routes = [
  { path: '', component: CoinListComponent },
  {
    path: 'about',
    loadComponent: () =>
      import('./components/about/about.component').then(m => m.AboutComponent)
  }
];
