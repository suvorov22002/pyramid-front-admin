import { AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { ReplaySubject } from 'rxjs';
import { Game } from '../../../@core/data/game';
import { DialogGameComponent } from './dialog-game/dialog-game.component';
import { GameService } from '../../../@core/services/game.service';

@Component({
  selector: 'ngx-handle-game',
  templateUrl: './handle-game.component.html',
  styleUrls: ['./handle-game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HandleGameComponent implements OnInit, AfterViewInit {

  displayedColumns = ['code', 'designation', 'description', 'edit'];
  dataSource: MatTableDataSource<Game> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input() allGame$: ReplaySubject<Game[]> = new ReplaySubject(1);

  isLoading: boolean = false;
  responseMessage: string;


  constructor(private dialogService: NbDialogService, private gameservice: GameService) {

  }

  ngOnInit(): void {

    this.allGame$.subscribe((data) => {
      this.isLoading = false;
      data.map(p => p.status = p.status === 'ACTIVE' ? 'true' : 'false')
      this.dataSource.data = data;
    });

  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  openWithoutBackdropClick(dialog: TemplateRef<any>) {
    this.dialogService.open(
      DialogGameComponent,
      {
        context: '',
        closeOnBackdropClick: false,
      }).onClose.subscribe(confirm => {
        if (confirm !== null) {
          this.dataSource.data.push(confirm);
          this.allGame$.next(this.dataSource.data)
        }
      });
  }

  onStatusFilter() {

  }

  handleEditAction(row: any) {

  }

  handleDeleteAction(row: any) {

  }

  onChange(status: any, id: number) {

    var data = {
      status: status.toString(),
      id: id
    }

    this.isLoading = true;

    this.gameservice.updateGameStatus(data).subscribe((response: Game) => {
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
