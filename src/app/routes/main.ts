import {Routes} from '@angular/router';
import {NotFoundComponent} from "../pages/not-found/not-found.component";
import {SignupComponent} from "../pages/signup/signup.component";
import {TitleComponent} from "../pages/title/title.component";
import {HomeComponent} from "../pages/home/home.component";
import {LoginComponent} from "../pages/login/login.component";

export const routes: Routes = [
  {
    path: 'titles/:slug',
    component: TitleComponent,
    data: { alias: 'Detalhes do Título' }
  },
  {
    path: 'signup',
    component: SignupComponent,
    data: { alias: 'Criar Conta' }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { alias: 'Logar' }
  },
  {
    path: '',
    component: HomeComponent,
    data: { alias: 'Início' }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

