import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HandlePartnerRoomComponent } from './handle-partner-room/handle-partner-room.component';
import { AccountingRoomComponent } from './accounting-room/accounting-room.component';
import { RoomComponent } from './room.component';

const routes: Routes = [{
  path: '',
  component: RoomComponent,
  children: [
    {
      path: 'managerooms',
      component: HandlePartnerRoomComponent,
    },
    {
      path: 'account',
      component: AccountingRoomComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomRoutingModule {
}
