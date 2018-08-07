import { Subscription } from 'rxjs';
import { EventService } from '../event.service';
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
        this.eventService
            .getEventById(+this.route.snapshot.params.id)
            .subscribe(event => this.event = event);
    }
}
