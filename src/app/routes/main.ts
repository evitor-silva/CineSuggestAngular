import {Routes} from '@angular/router';
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {HomeComponent} from "../pages/home/home.component";
import {SignupComponent} from "../pages/signup/signup.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {path: '**', component: NotFoundComponent}
];

