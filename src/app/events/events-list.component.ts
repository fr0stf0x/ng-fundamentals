import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ToastrService } from '../common/toastr.service';
import { EventService, IEvent } from './shared';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events: IEvent[];

  constructor(private eventService: EventService,
    private toastr: ToastrService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.events = this.route.snapshot.data.events;
  }

  handleThumbnailClick(eventName) {
    this.toastr.success(eventName);
  }

}
