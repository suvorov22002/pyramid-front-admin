import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbListModule,
  NbRadioModule,
  NbRouteTabsetModule,
  NbSelectModule,
  NbSpinnerModule,
  NbStepperModule,
  NbTabsetModule, NbTreeGridModule, NbUserModule,
} from '@nebular/theme';

import { FormsModule as ngFormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from '../../@theme/shared/material-module';
import { ThemeModule } from '../../@theme/theme.module';
import { RoomRoutingModule } from './room-routing.module';
import { HandlePartnerRoomComponent } from './handle-partner-room/handle-partner-room.component';
import { AccountingRoomComponent } from './accounting-room/accounting-room.component';
import { RoomComponent } from './room.component';

const formulaireModule = [
  NbInputModule,
  NbActionsModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  ngFormsModule
];

const tableGridModule = [
  NbTreeGridModule,
  NbIconModule,
  NbInputModule,
  Ng2SmartTableModule,
]


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ThemeModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbStepperModule,
    NbCardModule,
    NbButtonModule,
    NbListModule,
    NbAccordionModule,
    NbUserModule,
    RoomRoutingModule,
    CdkTableModule,
    NbSpinnerModule,
    MaterialModule,
    ...formulaireModule,
    ...tableGridModule,

  ],
  declarations: [
    RoomComponent,
    HandlePartnerRoomComponent,
    AccountingRoomComponent
  ],
  providers: [
   
  ],
})
export class RoomModule { }
