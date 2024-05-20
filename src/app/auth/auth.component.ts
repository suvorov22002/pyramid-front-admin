import { Component, OnDestroy } from "@angular/core";
import { NbAuthService } from "@nebular/auth";
import { takeWhile } from "rxjs/operators";
import { Location } from '@angular/common';

@Component({
    selector: 'nb-auth',
    styleUrls: ['./auth.component.scss'],
    templateUrl:'./auth.component.html' ,
  })
export class AuthComponent implements OnDestroy {

    private alive = true;
  
    subscription: any;
  
    authenticated: boolean = false;
    token: string = '';
  
    // showcase of how to use the onAuthenticationChange method
    constructor(protected auth: NbAuthService, protected location: Location) {
  
      this.subscription = auth.onAuthenticationChange()
        .pipe(takeWhile(() => this.alive))
        .subscribe((authenticated: boolean) => {
          this.authenticated = authenticated;
        });
    }
  
    back() {
      this.location.back();
      return false;
    }
  
    ngOnDestroy(): void {
      this.alive = false;
    }
  }