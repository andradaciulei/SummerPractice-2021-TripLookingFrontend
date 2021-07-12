import { TripModule } from './trip/trip.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TripModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
