import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { NbTreeGridDataSource, NbSortDirection, NbTreeGridDataSourceBuilder, NbSortRequest, NbIconLibraries } from '@nebular/theme';
import { Enrollment } from '../../../@core/data/enrollment';
import { PartnerService } from '../../../@core/services/partner.service';
import { Partner } from '../../../@core/data/partner';
import { GameService } from '../../../@core/services/game.service';
import { Game } from '../../../@core/data/game';
import { ParameterService } from '../../../@core/services/parameter.service';
import { Parameter } from '../../../@core/data/parameter';
import { EnrollmentService } from '../../../@core/services/enrollment.service';


@Component({
  selector: 'ngx-handle-subscription',
  templateUrl: './handle-subscription.component.html',
  styleUrls: ['./handle-subscription.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HandleSubscriptionComponent implements OnInit {

  isLoading: boolean = false;
  isValidEntries: boolean = true;
  error_message: string;
  code_partner: Partner;
  code_game: Game;
  allPartners: Partner[];
  allGames: Game[];
  parameter: Parameter;

  displayedColumns = ['partner', 'game', 'misemin', 'misemax', 'percent', 'bonusrate', 'bonusmax', 'edit'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  enrollmentData: Enrollment[] = [];
  enrollmentDisplayData: Enrollment[] = [];


  constructor(private partnerservice: PartnerService, private gameservice: GameService, 
      private paramservice: ParameterService, private enrollservice: EnrollmentService) { }

  ngOnInit(): void {
    this.onLoadAllPartners();
    this.onLoadAllGame();
  }

  onSelectGame() {

  }

  openAddNewGame() {

    if (this.code_partner === undefined || this.code_game === undefined || this.code_partner === null || this.code_game === null) return;

    var newGame = {
      "partner": this.code_partner.codePartner,
      "game": this.code_game.code,
      "percent": this.parameter.percent,
      "miseMin": this.parameter.miseMin,
      "miseMax": this.parameter.miseMax,
      "bonusRate": this.parameter.bonusRate,
      "bonusMax": this.parameter.bonusMax
    };

    var displayGame = {
      ...newGame,
      "partner": this.code_partner.designation,
      "game": this.code_game.designation
    }

    this.enrollmentData.push(newGame);
    this.enrollmentDisplayData.push(displayGame);
    this.code_partner = null;
    this.code_game = null;

  }

  onSelectedValidGame() {

    console.log("size", this.enrollmentData.length)
    var data: any;

    this.enrollmentData.forEach(
      (value, index) => {
        let name = (document.getElementById("partner_" + index) as HTMLInputElement).value;
        let game = (document.getElementById("game_" + index) as HTMLInputElement).value;
        let misemin = (document.getElementById("misemin_" + index) as HTMLInputElement).value;
        let misemax = (document.getElementById("misemax_" + index) as HTMLInputElement).value;
        let percent = (document.getElementById("percent_" + index) as HTMLInputElement).value;
        let bonusrate = (document.getElementById("bonusrate_" + index) as HTMLInputElement).value;
        let bonusmax = (document.getElementById("bonusmax_" + index) as HTMLInputElement).value;
        this.isValidEntries = true;

        if (Number(misemin) === undefined || Number(misemin) < 100 || Number(misemin) > Number(misemax)) {
          this.isValidEntries = false;
          this.error_message = "Mise Minimum incorrecte._"+index;
          return;
        }

        if (Number(misemax) === undefined || Number(misemax) > 10000 || Number(misemin) > Number(misemax)) {
          this.isValidEntries = false;
          this.error_message = "Mise Maximale incorrecte._"+index;
          return;
        }

        if (Number(percent) === undefined || Number(percent) < 70 || Number(percent) > 92) {
          this.error_message = "Pourcentage incorrecte._"+index;
          this.isValidEntries = false;
          return;
        }

        if (Number(bonusrate) === undefined || Number(bonusrate) > 10) {
          this.isValidEntries = false;
          this.error_message = "Bonus rate incorrecte._"+index;
          return;
        }

        if (Number(bonusmax) === undefined || Number(bonusmax) < 1000) {
          this.isValidEntries = false;
          this.error_message = "Bonus max incorrecte._"+index;
          return;
          
        }

        //Set value
        if(this.isValidEntries) {
          data = {
            "percent": Number(percent),
            "miseMin": Number(misemin),
            "miseMax": Number(misemax),
            "bonusRate": Number(bonusrate),
            "bonusMax": Number(bonusmax)
          }
          var existValue =  this.enrollmentData[index];
          this.enrollmentData[index] = {
            ...existValue,
            ...data
          }

          var display = this.enrollmentDisplayData[index]
          this.enrollmentDisplayData[index] = {
            ...display,
            ...data
          }
        }
       
      }
    )

    return this.isValidEntries;
  }

  registerNewGame() {

    this.isValidEntries = this.onSelectedValidGame();
    if(!this.isValidEntries) {
      console.log("errorMessage", this.error_message);
      alert(this.error_message)
    }
    else{
      
      if(this.enrollmentData.length === 1) {
        this.enrollservice.enrollGame(this.enrollmentData[0]).subscribe(
          (res) => {
            console.log(res);
            this.enrollmentData = [];
            this.enrollmentDisplayData = [];
          },
          (error) => {console.log(error)}
        )
      }
      else{
        this.enrollservice.enrollAllGame(this.enrollmentData).subscribe(
          (res) => {
            console.log(res);
            this.enrollmentData = [];
            this.enrollmentDisplayData = [];
          },
          (error) => {console.log(error)}
        )
      }
    }
  }

  canRegisterGame(){
    //return this.enrollmentData.length === 0 || !this.isValidEntries
    return false;
  }

  openRemoveNewGame(enroll: Enrollment) {
    let searched_index: number = this.enrollmentData.indexOf(enroll);
    //this.enrollmentData.splice(searched_index, 1);
    this.enrollmentData = this.enrollmentData.filter(item => item.game !== enroll.game);
    this.enrollmentDisplayData = this.enrollmentDisplayData.filter(item => item.game !== enroll.game);
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

  onLoadAllGame() {

    this.gameservice.listAllgames().subscribe({
      next: (data: Game[]) => {
        this.allGames = data;
      },
      error: () => {
        console.log("error")
      }
    })
  }

  onSelectPartner() {

    this.paramservice.selectPartner(this.code_partner.id).subscribe(
      (resp) => {
        this.parameter = resp;

      },
      (error) => {
        console.log(error)
      }
    )

  }

  handleDeleteAction(event: any) {

  }

  onChange(event: any, id: number) {

  }


}
