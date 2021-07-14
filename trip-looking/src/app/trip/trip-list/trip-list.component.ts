import { TripService } from './trip.service';
import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Trip } from 'src/app/models/trip';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss'],
})
export class TripListComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public test: number = -10;

  public formGroup: FormGroup;

  public tripList: Trip[];
  public initialList: Trip[];
  public modelInput: string;
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
    this.formGroup = new FormGroup(
      {
        title: new FormControl('', Validators.minLength(6)),
        description: new FormControl(''),
        private: new FormControl(false)
      }
    );

    this.formGroup.valueChanges.subscribe(
      (data: any) => {
        console.log(data)
      }
    );

    // this.formGroup.setValue(
    //   {
    //     title: 'Initial title',
    //     description: 'New description',
    //     private: true
    //   }
    // );

    // this.formGroup.patchValue(
    //   {
    //     title: 'Initial title'
    //   }
    // );
  }

  onDeleteClick(event): void {
    console.log(event);
  }

  public createTrip(newTrip: Trip): void {
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

  public onSubmit(): void {
    console.log(this.formGroup.value);
    const newTrip = new Trip(this.formGroup.value?.title, this.formGroup.value?.description, this.formGroup.value?.private);
    this.createTrip(newTrip);
  }

  onModelChange(): void {
    //console.log('Old value',this.modelInput);
    // this.modelInput = event;
    //console.log('new value',this.modelInput);

    this.tripList = this.modelInput
      ? this.tripList.filter((trip: Trip) =>
          trip.title.toLowerCase().includes(this.modelInput.toLowerCase())
        )
      : this.initialList;

    // if(this.modelInput)
    // {
    //   this.tripList = this.tripList.filter((trip: Trip) => trip.title.toLowerCase().includes(this.modelInput.toLowerCase()));

    // }
    // else {
    //   this.tripList = this.initialList;
    // }
  }

  private getTrips(): void {
    this.tripService.getTrips()
      .subscribe(
        (data) => {
          // console.log("get trips", data);
          this.tripList = data;
          this.initialList = data;
        }
      )
  }
}
