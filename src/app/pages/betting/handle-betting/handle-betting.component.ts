import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { PartnerService } from '../../../@core/services/partner.service';
import { MatTableDataSource } from '@angular/material/table';
import { Partner } from '../../../@core/data/partner';
import { Salle } from '../../../@core/data/salle';
import { BetKeno } from '../../../@core/data/betKeno';
import { BettingService } from '../../../@core/services/betting.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'ngx-handle-betting',
  templateUrl: './handle-betting.component.html',
  styleUrls: ['./handle-betting.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandleBettingComponent implements OnInit , AfterViewInit{

  isLoading: boolean = false;
  isValidEntries: boolean = true;
  error_message: string;
  code_partner: Partner;
  code_salle: Salle;
  allPartners: Partner[];
  allSalles: Salle[];
  allBetKeno: BetKeno[] = [];


  displayedColumns = ['date', 'code', 'game', 'mise', 'gain', 'etat', 'edit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private partnerservice: PartnerService, private betservice: BettingService) { }

  ngOnInit(): void {
    this.onLoadAllPartners();

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onLoadAllPartners() {

    this.partnerservice.listAllPartners().subscribe({
      next: (data: any) => {
        this.allPartners = data.data;
      },
      error: () => {
        console.log("error")
      }
    })
  }

  handleDeleteAction(event: any) {

  }

  onChange(event: any, id: number) {

  }

  onLoadEnroll() {

  }

  onSelectBetPartner(){
    console.log("Partner: ",this.code_partner)
    
    this.betservice.listAllBetPartner(this.code_partner.designation).subscribe(
      (res: BetKeno[]) => {
        console.log("BetKeno", res)
        this.dataSource.data = res
      },
      (error) => {
        console.log(error)
      }
    )
  }

  onSelectRoom(){

  }
}

