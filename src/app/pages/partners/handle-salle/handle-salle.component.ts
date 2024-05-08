import { Component, Input, OnInit } from '@angular/core';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest } from '@nebular/theme';
import { ReplaySubject } from 'rxjs';
import { Salle } from '../../../@core/data/salle';
import { PartnerService } from '../../../@core/services/partner.service';
import { SalleService } from '../../../@core/services/salle.service';


@Component({
  selector: 'ngx-handle-salle',
  templateUrl: './handle-salle.component.html',
  styleUrls: ['./handle-salle.component.scss']
})
export class HandleSalleComponent implements OnInit{

  allRoom$: ReplaySubject<Salle[]> = new ReplaySubject(1)


  constructor(private partnerservice: PartnerService, private roomservice: SalleService) {
    
  }
  
  ngOnInit(): void {
    this.onLoadAllRooms();
  }

  onLoadAllRooms() {
    this.roomservice.listAllRooms().subscribe(
      {
        next: (data: any) => {
          this.allRoom$.next(data.data);
        },
        error: () => {
          console.log("error")
          setTimeout(() => {
            this.onLoadAllRooms()
          }, 5000)
        }
      }
    )
  }
}