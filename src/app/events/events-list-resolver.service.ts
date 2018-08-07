import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { EventService } from './event/event.service';

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve() {
        return this.eventService.getEvents()
            .pipe(map(events => events));
    }
}
