import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISession } from './event.model';
import { of } from 'rxjs';

@Injectable()
export class VoterService {

    constructor(private http: HttpClient) { }

    addVoter(eventId: number, session: ISession, userName: string) {
        session.voters.push(userName);
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.post(url, {}, options)
            .pipe(catchError(this.handleError('addVoter'))).subscribe();
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any) => {
            console.log(error);
            return of(result as T);
        };
    }

    deleleVoter(eventId, session: ISession, userName: string) {
        session.voters = session.voters.filter(voter => voter !== userName);

        const url = `/api/events/${eventId}/sessions/${session.id}/voters/${userName}`;
        this.http.delete(url)
            .pipe(catchError(this.handleError('deleteVoter'))).subscribe();
    }

    userHasVoted(session: ISession, userName: string): boolean {
        return session.voters.includes(userName);
    }

}
