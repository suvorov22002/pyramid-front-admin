import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { User } from '../../../@core/data/users';
import { PartnerService } from '../../../@core/services/partner.service';
import { UserService } from '../../../@core/services/user.service';
import { Partner } from '../../../@core/data/partner';

@Component({
  selector: 'ngx-handle-users',
  templateUrl: './handle-users.component.html',
  styleUrls: ['./handle-users.component.scss']
})
export class HandleUsersComponent implements OnInit {

  allUser$: ReplaySubject<User[]> = new ReplaySubject(1);
  allPartners$: ReplaySubject<Partner[]> = new ReplaySubject(1);

  constructor(private partnerservice: PartnerService, private userservice: UserService) {

  }

  ngOnInit(): void {

    this.onLoadPartner();
    this.onLoadUser();

  }

  onLoadPartner() {
    this.partnerservice.listPartners().subscribe(
      {
        next: (data: any) => {
          console.log("this.allPartners$", data)
          this.allPartners$.next(data);
        },
        error: () => {
          console.log("error")
          setTimeout(() => {
            this.onLoadPartner()
          }, 5000)
        }
      }
    )
  }

  onLoadUser() {
    this.userservice.getUsers().subscribe(
      {
        next: (data: any) => {
          console.log("All USer", data)
          this.allUser$.next(data.data);
        },
        error: () => {
          console.log("error")
          setTimeout(() => {
            this.onLoadUser()
          }, 5000)
        }
      }
    )
  }
}
