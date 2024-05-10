import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ReplaySubject, from } from 'rxjs';
import { Partner } from '../../../@core/data/partner';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PartnerService } from '../../../@core/services/partner.service';
import { SalleService } from '../../../@core/services/salle.service';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'ngx-handle-all-partner',
  templateUrl: './handle-all-partner.component.html',
  styleUrls: ['./handle-all-partner.component.scss']
})
export class HandleAllPartnerComponent implements OnInit, AfterViewInit {


  displayedColumns = ['codePartner', 'designation', 'localisation', 'status', 'edit'];
  dataSource: MatTableDataSource<Partner> = new MatTableDataSource();

  @Input()
  allPartners$: ReplaySubject<Partner[]> = new ReplaySubject(1)

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoading: boolean = false;
  responseMessage: string;

  constructor(private partnerservice: PartnerService, private roomservice: SalleService) {

  }

  ngOnInit(): void {
    this.isLoading = false
    this.allPartners$.subscribe((data) =>{
      this.isLoading = false;
      data.map(p => p.status = p.status === 'ACTIVE' ? 'true' : 'false')
      this.dataSource.data = data;
    })
  }

 
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  handleEditAction(element) {

  }

  handleDeleteAction(element) {

  }

  
  onChange(status:any, id:any) {
    
    var data = {
      status: status.toString(),
      id: id
    }

    this.isLoading = true;
    
    this.partnerservice.updatePartnerStatus(data).subscribe((response:Partner) => {
      this.isLoading = false
      response.status = response.status === 'ACTIVE' ? 'true' : 'false' 
      this.dataSource.data = this.dataSource.data.map(el => el.id == response.id ? response : el)
    },
    (error) => {
      this.isLoading = false
      /*
      if (error.error?.message) {
        this.responseMessage = error.error?.message
      }
      else {
        this.responseMessage = GlobalConstants.genericError
      }
      this.snackService.openSnackBar(this.responseMessage, GlobalConstants.error);*/
    })
  }

}
