// import { Event } from './event.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  constructor() { }

  ngOnInit() {
  }

  getTimeStyles() {
    return this.event && this.event.time === '8:00 am' ?
      { 'color': '#003300', 'font-weight': 'bold' } : [];
  }

}
