import { AfterViewInit, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogConfig, NbDialogService } from '@nebular/theme';
import { ReplaySubject } from 'rxjs';
import { User } from '../../../@core/data/users';
import { UserService } from '../../../@core/services/user.service';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { Partner } from '../../../@core/data/partner';


@Component({
  selector: 'ngx-handle-all-users',
  templateUrl: './handle-all-users.component.html',
  styleUrls: ['./handle-all-users.component.scss']
})
export class HandleAllUsersComponent implements OnInit, AfterViewInit {

  displayedColumns = ['login', 'partnerCode', 'role', 'name', 'telephone', 'edit'];
  dataSource: MatTableDataSource<User> = new MatTableDataSource();

  @Input()
  allUser$: ReplaySubject<User[]> = new ReplaySubject(1);

  @Input()
  allPartners$: ReplaySubject<Partner[]> = new ReplaySubject(1);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  isLoading: boolean = false;
  responseMessage: string;
  room_status: string;

  constructor(private dialogService: NbDialogService, private userservice: UserService) { }

  ngOnInit(): void {
    this.isLoading = false
    this.allUser$.subscribe((data) => {
      this.isLoading = false;
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

  handleEditAction(values: any) {

    this.dialogService.open(
      DialogUserComponent,
      {
        context: {
          action: 'Edit',
          data: values,
          data$: this.allPartners$
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(confirm => {
        if (confirm !== null) {
          this.dataSource.data.push(confirm);
          this.allUser$.next(this.dataSource.data)
        }
      });

  }

  handleDeleteAction(element) {

  }


  onChange(status: any, id: any) {

    var data = {
      status: status.toString(),
      id: id
    }

    this.isLoading = true;

    this.userservice.updateUserStatus(data).subscribe((response: User) => {
      this.isLoading = false
      this.dataSource.data = this.dataSource.data.map(el => el.id == response.id ? response : el)
    },
      (error) => {
        this.isLoading = false
        console.log(error)
      })

  }

  openWithoutBackdropClick() {

    this.dialogService.open(
      DialogUserComponent,
      {
        context: {
          action: 'Add',
          data$: this.allPartners$
        },
        closeOnBackdropClick: false,
      }).onClose.subscribe(confirm => {
        if (confirm !== null) {
          this.dataSource.data.push(confirm);
          this.allUser$.next(this.dataSource.data)
        }
      });
  }

  onStatusFilter() {
    console.log("On status filter", this.room_status);
  }
}
