import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
  
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },
    {
      path: 'partners',
      loadChildren: () => import('./partners/partners.module')
        .then(m => m.PartnersModule),
    },
    {
      path: 'rooms',
      loadChildren: () => import('./rooms/room.module')
        .then(m => m.RoomModule),
    },
    {
      path: 'games',
      loadChildren: () => import('./games/games.module')
        .then(m => m.GamesModule),
    },
    {
      path: 'users',
      loadChildren: () => import('./users/user.module')
        .then(m => m.UserModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
