import { Injectable } from '@angular/core';
import { EventService } from '../event/event.service';
import { map } from 'rxjs/operators';
import { Resolve } from '@angular/router';

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve() {
        return this.eventService.getEvents()
            .pipe(map(events => events));
    }
}
