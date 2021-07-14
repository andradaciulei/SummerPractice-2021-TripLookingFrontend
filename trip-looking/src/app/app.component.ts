import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public test: number;
  public showList: boolean = true;

  constructor(){
    setTimeout(
      () => {
        this.test = 10;
      }
    , 1000)
  }

  title = 'trip-looking';
}
