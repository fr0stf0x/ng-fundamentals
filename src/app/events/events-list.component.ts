import { Component, OnInit } from '@angular/core';
import { EventService } from './event/event.service';
import { ToastrService } from '../common/toastr.service';
import { Subscription } from 'rxjs';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: Subscription;

  constructor(private eventService: EventService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.eventService.getEvents().subscribe(
      events => this.events = events);
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
