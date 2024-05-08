import { CdkTableModule } from "@angular/cdk/table";
import { NgModule } from "@angular/core";
import { FormsModule as ngFormsModule } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NbInputModule, 
    NbActionsModule, 
    NbCheckboxModule, 
    NbRadioModule, 
    NbDatepickerModule, 
    NbSelectModule, 
    NbIconModule, 
    NbTreeGridModule, 
    NbTabsetModule, 
    NbRouteTabsetModule, 
    NbStepperModule, 
    NbCardModule, 
    NbButtonModule, 
    NbListModule, 
    NbAccordionModule, 
    NbUserModule, 
    NbSpinnerModule } from "@nebular/theme";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { MaterialModule } from "../../@theme/shared/material-module";
import { ThemeModule } from "../../@theme/theme.module";
import { UserComponent } from "./user.component";
import { UserRoutingModule } from "./user-routing.module";


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
      UserRoutingModule,
      CdkTableModule,
      NbSpinnerModule,
      MaterialModule,
      ...formulaireModule,
      ...tableGridModule,
  
    ],
    declarations: [
        UserComponent
    ],
    providers: [
        
    ],
  })
export class UserModule { }