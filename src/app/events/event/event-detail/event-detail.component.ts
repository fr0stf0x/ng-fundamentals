import { EventService } from './../../shared/event.service';
import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    styleUrls: ['./event-detail.component.css'],
    templateUrl: './event-detail.component.html'
})

export class EventDetailComponent implements OnInit {

    event: Subscription;

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.route.snapshot.data.event;
    }
}
