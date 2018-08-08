import { AuthService } from './user/auth.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { ToastrService } from './common/toastr.service';
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
} from './events/index';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SessionCreateComponent,
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    PageNotFoundComponent,
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
    ToastrService,
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
