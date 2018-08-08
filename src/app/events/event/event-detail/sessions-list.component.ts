import { Component, OnInit, Input, Output } from '@angular/core';
import { ISession } from '../../shared';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sessions-list',
    templateUrl: 'sessions-list.component.html'
})

export class SessionsListComponent implements OnInit {

    @Input() sessions: ISession[];

    constructor() { }

    ngOnInit() { }
}
