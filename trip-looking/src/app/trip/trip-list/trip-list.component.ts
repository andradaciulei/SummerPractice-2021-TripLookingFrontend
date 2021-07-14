import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit, OnChanges, OnDestroy {

  @Input()
  public test: number = -10;

  public tripList = [{
    id: "1",
    title: "Trip 1",
    description: "My amazing trip",
    private: true,
  },
  {
    id: "2",
    title: "Trip 2",
    description: "My amazing trip",
    private: true,
  }
  ];

  constructor() {
    console.log("Test constructor", this.test);
  }

  ngOnDestroy(): void {
   console.log("Trip list component destroyed");
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }

  ngOnInit(): void {
    console.log("Test:", this.test);
  }

  onDeleteClick(event):void{
    console.log(event);
  }

}
