import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user.model';
import { tap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable()
export class AuthService {

    currentUser: IUser;

    constructor(private http: HttpClient) { }

    loginUser(userName: string, password: string): Observable<any> {
        const loginInfo = {
            username: userName,
            password: password
        };

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };

        return this.http.post('/api/login', loginInfo, options)
            .pipe(tap(data => {
                this.currentUser = <IUser>data['user'];
            }))
            .pipe(catchError(err => {
                return of(false);
            }));
    }

    isAuthenticated() {
        return !!this.currentUser;
    }

    logout() {
        this.currentUser = undefined;

        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.post('/api/logout', {}, options);
    }

    checkAuthStatus() {
        this.http
            .get('/api/currentIdentity')
            .pipe(tap(data => {
                if (data instanceof Object) {
                    console.log('Authenticated, setting current user info');
                    this.currentUser = <IUser>data;
                } else {
                    console.log('You are not authenticated');
                }
            }))
            .subscribe();
    }

    updateCurrentUser(firstName: string, lastName: string) {
        this.currentUser.firstName = firstName;
        this.currentUser.lastName = lastName;
        const options = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        return this.http.put(`/api/users/${this.currentUser.id}`, this.currentUser, options);
    }
}
