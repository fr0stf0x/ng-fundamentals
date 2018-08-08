import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from '../../common/toastr.service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'user-profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {

    profileForm: FormGroup;

    constructor(private auth: AuthService,
        private router: Router,
        private toastr: ToastrService) { }

    ngOnInit() {
        const firstName = new FormControl(this.auth.currentUser.firstName, Validators.required);
        const lastName = new FormControl(this.auth.currentUser.lastName, Validators.required);
        this.profileForm = new FormGroup({
            firstName: firstName,
            lastName: lastName,
        });
    }

    cancel() {
        this.router.navigate(['/events']);
    }

    saveProfile(formValues) {
        this.auth.updateCurrentUser(formValues.firstName, formValues.lastName);
        this.toastr.success('Update info success fully');
        this.router.navigate(['/events']);
    }
}
