import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripDetailsComponent } from './trip-list/trip-details/trip-details.component';


@NgModule({
  declarations: [TripListComponent, TripDetailsComponent],
  imports: [
    CommonModule
  ],
  exports: [TripListComponent, TripDetailsComponent],
})
export class TripModule { }
