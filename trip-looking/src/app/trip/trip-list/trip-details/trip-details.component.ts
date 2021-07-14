import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trip } from 'src/app/models/trip';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent {

  @Input() trip: any;
  @Output() onDeleteClicked: EventEmitter<string> = new EventEmitter<string>();
  @Output() onUpdateClicked: EventEmitter<Trip> = new EventEmitter<Trip>();

  constructor() {
  }

  onClick(): void {
    this.onDeleteClicked.emit(this.trip.id);
  }


  updateTrip(): void{
    this.onUpdateClicked.emit(this.trip);
  }
}
