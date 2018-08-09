import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable()
export class VoterService {

    constructor(private eventService: EventService) { }

    addVoter(session: ISession, userName: string) {
        session.voters.push(userName);
    }

    deleleVoter(session: ISession, userName: string) {
        session.voters = session.voters.filter(voter => voter !== userName);
    }

    userHasVoted(session: ISession, userName: string): boolean {
        return session.voters.includes(userName);
    }

}
