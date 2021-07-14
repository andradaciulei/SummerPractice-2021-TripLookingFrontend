import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent {

  @Input() trip: any;
  @Output() onDeleteClicked: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  onClick(): void {
    this.onDeleteClicked.emit(this.trip.id);
  }
}
