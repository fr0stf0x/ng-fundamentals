import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Resolve } from '@angular/router';
import { EventService } from './shared/index';

@Injectable()
export class EventListResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve() {
        return this.eventService.getEvents()
            .pipe(map(events => events));
    }
}
