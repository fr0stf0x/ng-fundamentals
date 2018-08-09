import { EventService } from './../../shared/event.service';
import { IEvent, ISession } from '../../shared';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-detail.component.html',
    styles: [`
    .container {
        padding-left: 20px;
        padding-right: 20px;
    }
    .event-image {
        height: 100px;
    }
    `],
})

export class EventDetailComponent implements OnInit {

    addMode = false;

    event: IEvent;
    sortBy = 'votes';
    filterBy = 'all';

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this.event = this.eventService.getEventById(+this.route.snapshot.params.id);
    }

    saveNewSession(session: ISession) {
        session.id = Math.max.apply(this.event.sessions.map(s => s.id));
        this.event.sessions.push(session);
        this.eventService.updateEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }

}
