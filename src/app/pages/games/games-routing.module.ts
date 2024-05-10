import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GamesComponent } from './games.component';
import { NewGameComponent } from './new-game/new-game.component';

const routes: Routes = [{
  path: '',
  component: GamesComponent,
  children: [
    {
      path: 'managegames',
      component: NewGameComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GamesRoutingModule {
}
