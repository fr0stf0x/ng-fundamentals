import { EventService } from './event.service';
import { Injectable } from '@angular/core';
import { ISession } from './event.model';

@Injectable()
export class VoterService {

    constructor(private eventService: EventService) { }

    addVoter(session: ISession, userName: string) {

    }

    deleleVoter(session: ISession, userName: string) {

    }

    userHasVoted(session: ISession, userName: string): boolean {

        return false;
    }
}
