import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import {NavbarComponent} from './navbar/navbar.component';
import { RatingComponent } from './rating/rating.component';
import {NgbRatingModule, NgbToastModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";
import { ToastComponent } from './toast/toast.component';
import { CommentsComponent } from './comments/comments.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    NavbarComponent,
    CardComponent,
    RatingComponent,
    ToastComponent,
    CommentsComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    NgbRatingModule,
    NgbTooltipModule,
    RouterModule,
    NgbToastModule
  ],
  exports: [
    NavbarComponent,
    CardComponent,
    RatingComponent,
    ToastComponent,
    CommentsComponent,
    FooterComponent
  ],
})
export class ComponentsModule {
}
