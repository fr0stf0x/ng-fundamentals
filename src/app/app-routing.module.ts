import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import {
    EventsListComponent,
    EventListResolver,
    EventCreateComponent,
    EventDetailComponent,
    EventRouteActivator,
} from './events/index';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/events' },
    {
        path: 'events', component: EventsListComponent,
        resolve: { events: EventListResolver }
    },
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
    { path: '404', component: PageNotFoundComponent },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }

export const routedComponents = [EventDetailComponent];
