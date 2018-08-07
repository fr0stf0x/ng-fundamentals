import { EventService } from './../event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    styleUrls: ['./event-detail.component.css'],
    templateUrl: './event-detail.component.html'
})

export class EventDetailComponent implements OnInit {

    event: any;

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEventById(
            +this.route.snapshot.params.id);
    }
}
