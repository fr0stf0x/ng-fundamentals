import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { FormsModule } from '@angular/forms';

import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';


@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        LoginComponent,
        ProfileComponent
    ],
    providers: [],
})
export class UserModule { }
