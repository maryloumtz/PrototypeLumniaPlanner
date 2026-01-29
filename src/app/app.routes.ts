import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Agenda } from './agenda/agenda';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'agenda', component: Agenda },
];
