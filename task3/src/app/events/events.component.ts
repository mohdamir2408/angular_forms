import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  events = []
  constructor(private eventService : EventService){}
  
  this.eventService.getEvents()
  .subscribe(
    (    res: any) => this.events = res,
    (    err: any) => console.log(err)
  )

}
