import { ISession } from './../events/shared/event.model';
import { EventService } from './../events/shared/event.service';
import { AuthService } from '../user/auth.service';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent {

    searchTerm = '';
    foundSessions: ISession[];

    constructor(private auth: AuthService, private eventService: EventService) { }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm)
            .subscribe(sessions => {
                this.foundSessions = sessions.slice(0);
            });
    }
}
