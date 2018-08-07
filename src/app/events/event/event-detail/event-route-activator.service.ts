import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import { EventService } from '../event.service';

@Injectable()
export class EventRouteActivator implements CanActivate {

    constructor(private eventService: EventService,
        private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const eventExists = !!this.eventService
            .getEventById(route.params.id);

        if (!eventExists) {
            this.router.navigate(['/404']);
        }
        return eventExists;
    }
}
