import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {routes} from './routes/main'
import {RouterModule} from "@angular/router";
import {ComponentsModule} from "./components/components.module";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PagesModule} from "./pages/pages.module";
import {ToastComponent} from "./components/toast/toast.component";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule,
    ComponentsModule,
    PagesModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
