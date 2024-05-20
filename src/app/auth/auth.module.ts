import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NbAuthModule } from "@nebular/auth";
import {
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbLayoutModule,
    NbCardModule
} from "@nebular/theme";
import { NgxAuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from './login/login.component';
import { AuthComponent } from "./auth.component";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        NbAlertModule,
        NbInputModule,
        NbButtonModule,
        NbCheckboxModule,
        NgxAuthRoutingModule,
        NbAuthModule,
        NbLayoutModule,
        NbCardModule,
        
    ],
    declarations: [
        LoginComponent,
        AuthComponent
    ],
})
export class NgxAuthModule {
}