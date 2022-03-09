import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteComponent } from './carte/carte.component';
import { LocalisationComponent } from './localisation/localisation.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    LocalisationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
