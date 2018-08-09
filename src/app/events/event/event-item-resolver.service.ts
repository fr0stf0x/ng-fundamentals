import { EventService } from '../shared/event.service';
import { Resolve, ActivatedRoute } from '@angular/router';
import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

@Injectable()
export class EventItemResolver implements Resolve<any> {

    constructor(private eventService: EventService,
        private route: ActivatedRoute) { }

    resolve() {
        // return this.eventService.getEventById(
        //     this.route.snapshot.params.id
        // ).pipe(map(event => event));
    }

}
