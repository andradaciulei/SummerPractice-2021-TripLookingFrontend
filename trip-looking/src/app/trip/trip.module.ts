import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailsComponent } from './trip-list/trip-details/trip-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TripListComponent, TripDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TripListComponent, TripDetailsComponent],
})
export class TripModule { }
