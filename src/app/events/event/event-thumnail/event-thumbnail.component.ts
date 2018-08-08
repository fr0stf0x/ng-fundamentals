import { IEvent } from '../../shared/index';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: IEvent;

  constructor() { }

  ngOnInit() {
  }

  getTimeStyles() {
    return this.event && this.event.time === '8:00 am' ?
      { 'color': '#003300', 'font-weight': 'bold' } : [];
  }

}
