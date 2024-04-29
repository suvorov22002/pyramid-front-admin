import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { Partner } from '../../../@core/data/partner';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  constructor() {

  }

  ngOnInit(): void {
    this.allPartners$.subscribe((data) => this.dataSource.data = data)
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

  onChange(status: any, id: number) {

  }

}
