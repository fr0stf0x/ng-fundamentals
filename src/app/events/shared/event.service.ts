import { IEvent, ISession } from './event.model';
import { Injectable, OnInit, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class EventService implements OnInit {

    constructor(private http: HttpClient) { }

    ngOnInit() {
    }

    saveEvent(event) {
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post<IEvent>('/api/events', event, options)
            .pipe(catchError(this.handleError<IEvent>('getEvents')));
    }

    getEvents(): Observable<IEvent[]> {
        return this.http.get<IEvent[]>('/api/events')
            .pipe(catchError(this.handleError<IEvent[]>('getEvents', [])));
    }

    getEventById(id: number): Observable<IEvent> {
        return this.http.get<IEvent>('/api/events/' + id)
            .pipe(catchError(this.handleError<IEvent>('getEvents')));
    }

    searchSessions(searchTerm: string): Observable<ISession[]> {
        return this.http.get<ISession[]>('/api/sessions/search?search=' + searchTerm)
            .pipe(catchError(this.handleError<ISession[]>('searchSessions')));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any) => {
            console.log(error);
            return of(result as T);
        };
    }
}
