import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BettingComponent } from "./betting.component";
import { HandleBettingComponent } from "./handle-betting/handle-betting.component";
import { HandleCashierReportComponent } from "./handle-cashier-report/handle-cashier-report.component";

const routes: Routes = [{
    path: '',
    component: BettingComponent,
    children: [
      {
        path: 'managebets',
        component: HandleBettingComponent,
      },
      {
        path: 'reports',
        component: HandleCashierReportComponent,
      }
    ],
  }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class BettingRoutingModule {
  }