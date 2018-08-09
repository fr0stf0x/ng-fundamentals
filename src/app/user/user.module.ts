import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule, // -> user route
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        LoginComponent,
        ProfileComponent
    ],
    providers: [],
})
export class UserModule { }
