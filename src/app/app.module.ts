import { AuthService } from './user/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import {
  JQ_TOKEN,
  TOASTR_TOKEN, Toastr,
  CollapseWellComponent
} from './common/'; // -> index.ts

import {
  EventsListComponent,
  EventListResolver,
  SessionCreateComponent,
  EventService,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivator,
  DurationPipe,
  SessionsListComponent,
} from './events';

const toastr: Toastr = window['toastr'];
const jQuery = window['$'];

@NgModule({
  declarations: [
    DurationPipe,
    SessionCreateComponent,
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    PageNotFoundComponent,
    SessionsListComponent,
    CollapseWellComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    AuthService,
    EventService,
    {
      provide: TOASTR_TOKEN, useValue: toastr
    },
    {
      provide: JQ_TOKEN, useValue: jQuery,
    },
    EventListResolver,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component): boolean {
  return component.isDirty
    ? window.confirm('You have not saved data,` continue?')
    : true;
}
