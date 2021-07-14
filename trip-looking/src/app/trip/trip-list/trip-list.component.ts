import { TripService } from './trip.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Trip } from 'src/app/models/trip';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
})
export class TripListComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public test: number = -10;

  public tripList: Trip[];
  //  = [{
  //   id: "1",
  //   title: "Trip 1",
  //   description: "My amazing trip",
  //   private: true,
  // },
  // {
  //   id: "2",
  //   title: "Trip 2",
  //   description: "My amazing trip",
  //   private: true,
  // }
  // ];

  constructor(private readonly tripService: TripService) {
    // console.log("Test constructor", this.test);
  }

  ngOnDestroy(): void {
    // console.log("Trip list component destroyed");
  }


  ngOnChanges(changes: SimpleChanges): void {
    // console.log('changes', changes);
  }

  ngOnInit(): void {
    // console.log("Test:", this.test);
    this.getTrips();
  }

  onDeleteClick(event): void {
    console.log(event);
  }

  public createTrip(): void {
    const newTrip = new Trip(
      "Trip !!!!!!!",
      "Trip description",
      true
    );

    this.tripService.createTrip(newTrip)
      .subscribe(
        (data) => {
          this.getTrips();
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public updateTrip(trip: Trip): void {
    // const trip = this.tripList[0];
    trip.title = "Updated title!!!!!!!";

    this.tripService.updateTrip(trip.id, trip)
      .subscribe(() => this.getTrips());
  }

  private getTrips(): void {
    this.tripService.getTrips()
      .subscribe(
        (data) => {
          // console.log("get trips", data);
          this.tripList = data;
        }
      )
  }
}
