import { AuthService } from './auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'login-form',
    templateUrl: './login.component.html',
    styles: [`
        em {
            float: right;
            color: red;
            font-size:13px
        }
    `],
})

export class LoginComponent implements OnInit {

    userName: string;
    password: string;
    mouseOver: boolean;

    constructor(private auth: AuthService,
        private router: Router) { }

    ngOnInit() { }

    login(formValues) {
        this.auth.loginUser(
            formValues.userName, formValues.password);
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}
