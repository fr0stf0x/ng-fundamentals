import { AuthService } from '../auth.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { Toastr, TOASTR_TOKEN } from '../../common/toastr.service';

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
        private router: Router,
        @Inject(TOASTR_TOKEN) private toastr: Toastr) { }

    ngOnInit() { }

    login(formValues) {
        this.auth.loginUser(
            formValues.userName, formValues.password);
        // this.toastr.success('Login successfully');
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }

}
