import { Component, OnInit } from '@angular/core';
import { EventsDataService } from '../../services/events-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {  
  eventsData: any = {};
  events : any = {};

  constructor(eventsData: EventsDataService) {
    eventsData.events().subscribe((data) => {
      this.eventsData = data;  
    });
  }

}
