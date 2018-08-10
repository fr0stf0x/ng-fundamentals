import { VoterService } from './../../shared/voter.service';
import { AuthService } from './../../../user/auth.service';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ISession, } from '../../shared';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'sessions-list',
    templateUrl: 'sessions-list.component.html'
})

export class SessionsListComponent implements OnInit, OnChanges {

    @Input() sessions: ISession[];
    @Input() filterBy: string;
    @Input() sortBy: string;
    @Input() eventId: number;

    visibleSessions: ISession[] = [];

    constructor(private auth: AuthService,
        private voterService: VoterService) { }

    ngOnInit() { }

    toggleVote(session: ISession) {
        if (this.userHasVoted(session)) {
            this.voterService.deleleVoter(this.eventId, session, this.auth.currentUser.userName);
        } else {
            this.voterService.addVoter(this.eventId, session, this.auth.currentUser.userName);
        }
        if (this.sortBy === 'votes') {
            this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    userHasVoted(session: ISession): boolean {
        return this.voterService.userHasVoted(session, this.auth.currentUser.userName);
    }

    ngOnChanges() {
        if (this.sessions) {
            this.filterSession(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc)
                : this.visibleSessions.sort(sortByVotesDesc);
        }
    }

    filterSession(filter) {
        if (filter === 'all') {
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(s => s.level.toLocaleLowerCase() === filter);
        }
    }
}

function sortByNameAsc(s1: ISession, s2: ISession) {
    if (s1.name > s2.name) {
        return 1;
    } else if (s1.name === s2.name) {
        return 0;
    }
    return -1;
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
    return s2.voters.length - s1.voters.length;
}
