import {Routes} from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {HomeComponent} from './components/shared/home/home.component';

export const routes: Routes = [
  { path: 'login',      component: LoginComponent },
  { path: 'home',      component: HomeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
