import { EventService } from '../shared/event.service';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class EventItemResolver implements Resolve<any> {

    constructor(private eventService: EventService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.eventService.getEventById(+route.params['id']);
    }

}
