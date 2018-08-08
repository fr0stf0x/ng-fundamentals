import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { EventService } from '../../shared/event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists = !!this.eventService
            .getEventById(Number.parseInt(route.params['id']));

        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}
