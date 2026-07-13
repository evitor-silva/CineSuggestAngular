import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotFoundComponent} from "./not-found/not-found.component";
import {ComponentsModule} from "../components/components.module";
import {SignupComponent} from './signup/signup.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TitleComponent} from './title/title.component';
import {HomeComponent} from "./home/home.component";
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    SignupComponent,
    HomeComponent,
    TitleComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NotFoundComponent,
    SignupComponent,
    HomeComponent,
  ],
})
export class PagesModule {
}
