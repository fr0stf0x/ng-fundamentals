import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { ToastrService } from './common/toastr.service';
import { HttpClientModule } from '@angular/common/http';
import { EventService } from './events/event/event.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event/event-thumnail/event-thumbnail.component';
import { NavBarComponent } from './nav/nav-bar.component';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { EventCreateComponent } from './events/event/event-create/event-create.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { EventRouteActivator } from './events/event/event-detail/event-route-activator.service';

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

function checkDirtyState(component: EventCreateComponent): boolean {
  return component.isDirty
    ? window.confirm('You have not saved data,` continue?')
    : true;
}
