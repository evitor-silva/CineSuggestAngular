import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {ComponentsModule} from "../components/components.module";
import { SignupComponent } from './signup/signup.component';


@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
  ],
  exports:[
    HomeComponent,
    NotFoundComponent,
    SignupComponent
  ],
})
export class PagesModule { }
