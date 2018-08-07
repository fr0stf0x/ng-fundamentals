import { ActivatedRoute } from '@angular/router';
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
  EventListResolver
} from './events/index';

import {
  EventService,
  EventThumbnailComponent,
  EventDetailComponent,
  EventCreateComponent,
  EventRouteActivator,
} from './event/index';

@NgModule({
  declarations: [
    EventsAppComponent,
    NavBarComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    EventCreateComponent,
    PageNotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
  ],
  providers: [
    EventListResolver,
    EventRouteActivator,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState,
    },
    ToastrService,
    EventService,
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component): boolean {
  return component.isDirty
    ? window.confirm('You have not saved data,` continue?')
    : true;
}
