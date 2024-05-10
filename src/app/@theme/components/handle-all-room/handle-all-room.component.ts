import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ReplaySubject } from 'rxjs';
import { Salle } from '../../../@core/data/salle';
import { NbDialogService } from '@nebular/theme';
import { DialogRoomComponent } from './dialog/dialog-room/dialog-room.component';
import { SalleService } from '../../../@core/services/salle.service';

@Component({
  selector: 'ngx-handle-all-room',
  templateUrl: './handle-all-room.component.html',
  styleUrls: ['./handle-all-room.component.scss']
})
export class HandleAllRoomComponent implements OnInit, AfterViewInit{

  displayedColumns = ['codeSalle', 'designation', 'localisation', 'partnerCode','status', 'edit'];
  dataSource: MatTableDataSource<Salle> = new MatTableDataSource();

  @Input()
  allRoom$: ReplaySubject<Salle[]> = new ReplaySubject(1)

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoading: boolean = false;
  responseMessage: string;
  room_status: string;

  constructor(private dialogService: NbDialogService, private roomservice: SalleService){}

  ngOnInit(): void {
    this.isLoading = false
    this.allRoom$.subscribe((data) =>{
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
    
    this.roomservice.updateSalleStatus(data).subscribe((response:Salle) => {
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

  onCreateRoom(){

  }

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.dialogService.open(
      DialogRoomComponent,
      {
        context: '',
        closeOnBackdropClick: false,
      }).onClose.subscribe(confirm => {
        if(confirm !== null) {
          this.dataSource.data.push(confirm);
          this.allRoom$.next(this.dataSource.data)
        }
      });
  }

  onStatusFilter(){
    console.log("On status filter",this.room_status);
  }

}
