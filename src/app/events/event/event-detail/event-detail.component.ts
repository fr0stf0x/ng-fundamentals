import { IEvent, ISession } from '../../shared/event.model';
import { EventService } from '../../shared/event.service';
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
