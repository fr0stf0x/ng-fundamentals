import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { EventCreateComponent } from './events/event/event-create/event-create.component';
import { EventsListComponent } from './events/events-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EventDetailComponent } from './events/event/event-detail/event-detail.component';
import { EventRouteActivator } from './events/event/event-detail/event-route-activator.service';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/events' },
    { path: 'events', component: EventsListComponent, },
    {
        path: 'create-event',
        component: EventCreateComponent,
        canDeactivate: ['canDeactivateCreateEvent'],
    },
    {
        path: 'events/:id',
        canActivate: [EventRouteActivator],
        component: EventDetailComponent
    },
    { path: '404', component: PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [EventDetailComponent];
