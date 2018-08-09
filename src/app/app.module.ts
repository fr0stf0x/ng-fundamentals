import { SessionsListComponent } from './events/event/event-detail/sessions-list.component';
import { AuthService } from './user/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { NavBarComponent } from './nav/nav-bar.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

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
} from './events';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseWellComponent } from './common/collapse-well.component';

const toastr: Toastr = window['toastr'];

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
