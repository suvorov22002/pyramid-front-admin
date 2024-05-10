import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Salle } from '../../../@core/data/salle';
import { SalleService } from '../../../@core/services/salle.service';

@Component({
  selector: 'ngx-handle-partner-room',
  templateUrl: './handle-partner-room.component.html',
  styleUrls: ['./handle-partner-room.component.scss']
})

export class HandlePartnerRoomComponent implements OnInit{

  allRoom$: ReplaySubject<Salle[]> = new ReplaySubject(1)


  constructor(private roomservice: SalleService) {
    
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

  onLoadAllRoomsPartner(code: string) {
    this.roomservice.listAllRoomPartner(code).subscribe(
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
