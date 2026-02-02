import { Routes } from '@angular/router';

import { Home } from './home/home';
import { Calendrier } from './agenda/agenda';
import { Nutrition } from './nutrition/nutrition';
import { Communaute } from './communaute/communaute';
import { Chatbot } from './chatbot/chatbot';
import { Profil } from './profil/profil';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nutrition', component: Nutrition },
  { path: 'calendrier', component: Calendrier },
  { path: 'communaute', component: Communaute },
  { path: 'chatbot', component: Chatbot },
  { path: 'profil', component: Profil },
  { path: 'agenda', redirectTo: 'calendrier', pathMatch: 'full' },
  { path: 'repas', redirectTo: 'nutrition', pathMatch: 'full' },
];
