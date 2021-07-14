import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trip } from 'src/app/models/trip';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class TripService {
  private _api: string = 'https://triplooking.azurewebsites.net/api/trips';

  private _httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
  };

  constructor(private httpClient: HttpClient) {
  }

  public getTrips(): Observable<Trip[]> {
    return this.httpClient.get<Trip[]>(this._api,this._httpOptions);
  }


  public createTrip(trip: Trip): Observable<void> {
    return this.httpClient.post<void>(this._api, trip, this._httpOptions);
  }

  public updateTrip(tripId: string, updatedTrip: Trip): Observable<void>{
    return this.httpClient.put<void>(`${this._api}/${tripId}`, updatedTrip, this._httpOptions);
  }
}
