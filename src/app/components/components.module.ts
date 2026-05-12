import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {NavbarComponent} from './navbar/navbar.component';
import { RatingComponent } from './rating/rating.component';
import {NgbRatingModule, NgbToastModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    RatingComponent,
    ToastComponent
  ],
  imports: [
    CommonModule,
    NgbRatingModule,
    NgbTooltipModule,
    NgbToastModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    RatingComponent,
    ToastComponent
  ],
})
export class ComponentsModule {
}
