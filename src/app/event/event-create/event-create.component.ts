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

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigateByUrl('/events');
  }

}
