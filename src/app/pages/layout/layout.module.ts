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
  NbStepperModule,
  NbTabsetModule, NbTreeGridModule, NbUserModule,
} from '@nebular/theme';

import { ThemeModule } from '../../@theme/theme.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NewsService } from './news.service';
import { FormsModule as ngFormsModule } from '@angular/forms';
import { ParametragesComponent } from './parametrages/parametrages.component';
import { NewPartnerComponent } from './new-partner/new-partner.component';
import { HandlePartnerComponent } from './handle-partner/handle-partner.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { HandleSalleComponent } from './handle-salle/handle-salle.component';
import { HandleSubscriptionComponent } from './handle-subscription/handle-subscription.component';
import { FsIconComponent } from './fs-icon/fs-icon.component';

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
    LayoutRoutingModule,
    ...formulaireModule,
    ...tableGridModule
  ],
  declarations: [
    LayoutComponent,
    ParametragesComponent,
    NewPartnerComponent,
    HandlePartnerComponent,
    FsIconComponent,
    HandleSalleComponent,
    HandleSubscriptionComponent
  ],
  providers: [
    NewsService,
  ],
})
export class LayoutModule { }
