import { EventService } from './../../shared/event.service';
import { IEvent, ISession } from '../../shared';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

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

    addMode: boolean;

    event: IEvent;
    sortBy: string;
    filterBy: string;

    constructor(private eventService: EventService,
        private route: ActivatedRoute) {
        this.initStates();
    }

    private initStates() {
        this.addMode = false;
        this.sortBy = 'votes';
        this.filterBy = 'all';
    }

    ngOnInit() {
        this.route.data.forEach(data => {
            this.event = data['event'];
            this.initStates();
        });
    }

    saveNewSession(session: ISession) {
        session.id = Math.max.apply(this.event.sessions.map(s => s.id));
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event);
        this.addMode = false;
    }

    cancelAddSession() {
        this.addMode = false;
    }

}
