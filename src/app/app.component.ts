import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  message: string = 'Hello World';
  appmessage: boolean = true;
  name: string = 'Tej';
  applist: any[] = [{
    "id": "1",
    "Name": "One"
  },
  {
  "id": "2",
  "Name": "Two"
  }
];
constructor(){}

}
