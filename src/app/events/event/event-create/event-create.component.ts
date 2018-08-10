import { EventService } from '../../shared/event.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent implements OnInit {

  isDirty = true;
  newEvent: any;

  constructor(private route: Router, private eventService: EventService) { }

  ngOnInit() {
    this.newEvent = {
      name: 'Ng Spectacular',
      date: '6/4/2019',
      time: '10:00 am',
      price: '599.99',
      location: {
        city: 'Ho Chi Minh',
        address: '24 Cong Hoa St',
        country: 'Viet Nam',
      },
      onlineUrl: 'https://google.com.vn',
      imageUrl: 'https://google.com.vn/logo.png',
    };
  }

  saveEvent(formValues) {
    this.eventService.saveEvent(formValues).subscribe((data) => {
      console.log(data);
      this.isDirty = false;
      this.route.navigateByUrl('/events');
    });
  }

  cancel() {
    this.route.navigateByUrl('/events');
  }

}
