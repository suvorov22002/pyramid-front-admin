import { Component, OnInit } from '@angular/core';
import { PartnerService } from '../../../@core/services/partner.service';
import { Partner } from '../../../@core/data/partner';
import { ReplaySubject, from } from 'rxjs';
import { SalleService } from '../../../@core/services/salle.service';



@Component({
  selector: 'ngx-handle-partner',
  templateUrl: './handle-partner.component.html',
  styleUrls: ['./handle-partner.component.scss']
})
export class HandlePartnerComponent implements OnInit{


  allPartners$: ReplaySubject<Partner[]> = new ReplaySubject(1)


  constructor(private partnerservice: PartnerService, private roomservice: SalleService) {
    
  }
  
  ngOnInit(): void {
    this.onLoadAllPartners();
  }

  
 
  onLoadAllPartners() {

    this.partnerservice.listAllPartners().subscribe({
      next: (data: any) => {
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

}
