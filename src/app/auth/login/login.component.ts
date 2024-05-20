import { ChangeDetectorRef, Component, Inject, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NB_AUTH_OPTIONS, NbAuthService, NbLoginComponent } from '@nebular/auth';
import { GlobalConstants } from '../../@theme/shared/global-constants';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends NbLoginComponent implements OnInit {
  
  ngForm: UntypedFormGroup;
  static userRole: string;

  constructor(private fb: UntypedFormBuilder, protected service: NbAuthService,
    @Inject(NB_AUTH_OPTIONS) protected options = {},
    protected cd: ChangeDetectorRef,
    protected router: Router) {

      super(service, options, cd, router);

    }

  ngOnInit(): void {
    
    this.ngForm = this.fb.group({
  
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
      
    });

    localStorage.removeItem("userRole")
  }

  login() {
    this.submitted = true;

    setTimeout(() => {
    
      localStorage.setItem("userRole", 'SUPERADMIN')
      return this.router.navigateByUrl('/pages');
    }, 500);
    this.cd.detectChanges();
  }

}

export function hasRoles(role: string[]): boolean {
  var result = role.includes(localStorage.getItem("userRole"));
  return !result
}
