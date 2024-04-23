import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { ParametragesComponent } from './parametrages/parametrages.component';
import { NewPartnerComponent } from './new-partner/new-partner.component';
import { HandlePartnerComponent } from './handle-partner/handle-partner.component';
import { HandleSalleComponent } from './handle-salle/handle-salle.component';
import { HandleSubscriptionComponent } from './handle-subscription/handle-subscription.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [
    {
      path: 'partner',
      component: NewPartnerComponent,
    },
    {
      path: 'managepartner',
      component: HandlePartnerComponent,
    },
    {
      path: 'parametrages',
      component: ParametragesComponent,
    },
    {
      path: 'salle',
      component: HandleSalleComponent,
    },
    {
      path: 'enroll',
      component: HandleSubscriptionComponent
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRoutingModule {
}
