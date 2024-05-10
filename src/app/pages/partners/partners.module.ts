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
import { ParametragesComponent } from './parametrages/parametrages.component';
import { NewPartnerComponent } from './new-partner/new-partner.component';
import { HandlePartnerComponent } from './handle-partner/handle-partner.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HandleSalleComponent } from './handle-salle/handle-salle.component';
import { HandleSubscriptionComponent } from './handle-subscription/handle-subscription.component';
import { FsIconComponent } from './fs-icon/fs-icon.component';
import { PartnersComponent } from './partners.component';
import { PartnersRoutingModule } from './partners-routing.module';
import { CdkTableModule } from '@angular/cdk/table';
import { MaterialModule } from '../../@theme/shared/material-module';
import { ThemeModule } from '../../@theme/theme.module';
import { HandleUsersComponent } from '../users/handle-users/handle-users.component';


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
    PartnersRoutingModule,
    CdkTableModule,
    NbSpinnerModule,
    MaterialModule,
    ...formulaireModule,
    ...tableGridModule,

  ],
  declarations: [
    PartnersComponent,
    ParametragesComponent,
    NewPartnerComponent,
    HandlePartnerComponent,
    FsIconComponent,
    HandleSalleComponent,
    HandleSubscriptionComponent,
    HandleUsersComponent
  ],
  providers: [
   
  ],
})
export class PartnersModule { }
