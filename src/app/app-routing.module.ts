import { SessionCreateComponent } from './events/event/event-detail/session-create.component';
import { UserModule } from './user/user.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import {
    EventsListComponent,
    EventListResolver,
    EventCreateComponent,
    EventDetailComponent,
    EventRouteActivator,
} from './events';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/events' },
    {
        path: 'events', component: EventsListComponent,
        resolve: { events: EventListResolver },
        pathMatch: 'full',
    },
    {
        path: 'events/new',
        component: EventCreateComponent,
        canDeactivate: ['canDeactivateCreateEvent'],
    },
    {
        path: 'events/:id',
        component: EventDetailComponent,
        canActivate: [EventRouteActivator],
    },
    { path: 'events/sessions/new', component: SessionCreateComponent },
    { path: '404', component: PageNotFoundComponent },
    {
        path: 'user',
        loadChildren: () => UserModule,
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
