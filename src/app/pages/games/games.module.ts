import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbAccordionModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
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
import { GamesComponent } from './games.component';
import { GamesRoutingModule } from './games-routing.module';
import { NewGameComponent } from './new-game/new-game.component';

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
    NbDialogModule,
    NbUserModule,
    CdkTableModule,
    NbSpinnerModule,
    MaterialModule,
    GamesRoutingModule,
    ...formulaireModule,
    ...tableGridModule,

  ],
  declarations: [
    GamesComponent,
    NewGameComponent,
  ],
  providers: [
  ],
})
export class GamesModule { }
