import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

import {
    // Components
    EventsListComponent,
    EventCreateComponent,
    EventDetailComponent,
    SessionCreateComponent,
    // Resolvers and Activators
    EventListResolver,
    EventItemResolver,
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
        resolve: { event: EventItemResolver },
    },
    { path: 'events/sessions/new', component: SessionCreateComponent },
    { path: '404', component: PageNotFoundComponent },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule', // Load user module
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
    exports: [RouterModule],
})
export class AppRoutingModule { }
