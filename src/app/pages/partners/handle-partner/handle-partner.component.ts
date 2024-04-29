import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../../@core/services/partner.service';
import { Partner } from '../../../@core/data/partner';
import { ReplaySubject } from 'rxjs';



@Component({
  selector: 'ngx-handle-partner',
  templateUrl: './handle-partner.component.html',
  styleUrls: ['./handle-partner.component.scss']
})
export class HandlePartnerComponent implements OnInit{


  allPartners$: ReplaySubject<Partner[]> = new ReplaySubject(1)


  constructor(private partnerservice: PartnerService) {
    
  }
  
  ngOnInit(): void {
    this.onLoadAllPartners();
  }

  
 
  onLoadAllPartners() {

    this.partnerservice.listAllPartners().subscribe({
      next: (data) => {
        
        this.allPartners$.next(data.data);
      },
      error: () => {
        console.log("error")
        setTimeout(() => {
          this.onLoadAllPartners()
        }, 5000)
      }
    })
  }

  handleEditAction(element){

  }

  handleDeleteAction(element){

  }

  onChange(status: any, id: number){

  }
}

/** Builds and returns a new User. */
function createNewUser(): Partner {
  
  return {
    codePartner: "ZEIRFDND?D?D?D",
    designation: "SUPERTBE",
    localisation: "TSINGA",
    status: "ACTIVE"
  };
}
