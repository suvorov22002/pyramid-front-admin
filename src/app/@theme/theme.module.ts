import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbThemeModule,
  NbDialogModule,
  NbCardModule,
  NbSpinnerModule,
  NbInputModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbSecurityModule } from '@nebular/security';

import {
  FooterComponent,
  HeaderComponent,
  SearchInputComponent,
  TinyMCEComponent,
} from './components';
import {
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
} from './pipes';
import {
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
} from './layouts';
import { DEFAULT_THEME } from './styles/theme.default';
import { COSMIC_THEME } from './styles/theme.cosmic';
import { CORPORATE_THEME } from './styles/theme.corporate';
import { DARK_THEME } from './styles/theme.dark';
import { MATERIAL_LIGHT_THEME } from './styles/material/theme.material-light';
import { MATERIAL_DARK_THEME } from './styles/material/theme.material-dark';
import { DialogNamePromptComponent } from './components/dialog-name-prompt/dialog-name-prompt.component';
import { HandleAllPartnerComponent } from './components/handle-all-partner/handle-all-partner.component';
import { MaterialModule } from './shared/material-module';
import { HandleAllRoomComponent } from './components/handle-all-room/handle-all-room.component';
import { DialogRoomComponent } from './components/handle-all-room/dialog/dialog-room/dialog-room.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StatusPipe } from './pipes/status.pipe';
import { HandleGameComponent } from './components/handle-game/handle-game.component';
import { DialogGameComponent } from './components/handle-game/dialog-game/dialog-game.component';
import { HandleAllUsersComponent } from './components/handle-all-users/handle-all-users.component';
import { DialogUserComponent } from './components/handle-all-users/dialog-user/dialog-user.component';
//import { MaterialModule } from './shared/material-module';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbSecurityModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
  NbDialogModule,
  NbCardModule,
  NbSpinnerModule,
  NbInputModule,
  NbActionsModule,
  NbCheckboxModule,
  NbRadioModule,
  NbDatepickerModule,
  NbSelectModule,
  NbIconModule,
  FormsModule,
  ReactiveFormsModule,
];
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SearchInputComponent,
  TinyMCEComponent,
  OneColumnLayoutComponent,
  ThreeColumnsLayoutComponent,
  TwoColumnsLayoutComponent,
  DialogNamePromptComponent,
  HandleAllPartnerComponent,
  HandleAllRoomComponent,
  DialogRoomComponent,
  HandleGameComponent,
  DialogGameComponent,
  HandleAllUsersComponent
  
];
const PIPES = [
  CapitalizePipe,
  PluralPipe,
  RoundPipe,
  TimingPipe,
  NumberWithCommasPipe,
  StatusPipe
];

@NgModule({
  imports: [CommonModule, MatRippleModule, MaterialModule, ...NB_MODULES],
  exports: [CommonModule, MatRippleModule, ...PIPES, ...COMPONENTS],
  declarations: [...COMPONENTS, ...PIPES, DialogUserComponent],
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        ...NbThemeModule.forRoot(
          {
            name: 'default',
          },
          [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DARK_THEME, MATERIAL_LIGHT_THEME, MATERIAL_DARK_THEME ],
        ).providers,
      ],
    };
  }
}
