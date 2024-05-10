import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Game } from '../../../../@core/data/game';
import { Partner } from '../../../../@core/data/partner';
import { GlobalConstants } from '../../../shared/global-constants';
import { DialogRoomComponent } from '../../handle-all-room/dialog/dialog-room/dialog-room.component';
import { GameService } from '../../../../@core/services/game.service';
import { PartnerService } from '../../../../@core/services/partner.service';

@Component({
  selector: 'ngx-dialog-game',
  templateUrl: './dialog-game.component.html',
  styleUrls: ['./dialog-game.component.scss']
})
export class DialogGameComponent implements OnInit{

  firstForm: UntypedFormGroup;
  isLoading: boolean = false;
  allPartners$: Observable<Partner[]> = new Observable<Partner[]>();
  selectedItem: any;

  constructor(private fb: UntypedFormBuilder, protected ref: NbDialogRef<DialogRoomComponent>,
    private gameservice: GameService, private partnerservice: PartnerService) { }

  ngOnInit(): void {
    
    this.firstForm = this.fb.group({
      designation: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      code: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      description: [null]
    });

  }

  onCreateGame() {
    var formData = this.firstForm.value;
    var data = {
      code: formData.code,
      designation: formData.designation,
      description: formData.description,
      status: 'INACTIVE'
    }
    this.isLoading = true;
    
    this.gameservice.createGame(data).subscribe(
      (res: Game) => {
        setTimeout(
          () => {
            this.isLoading = false
            this.ref.close(res);
          }, 1000
        )
      },
      error => {
        this.isLoading = false
        console.log(error?.message)
      }
    )

  }
 
  onLoadPartner(){
    this.allPartners$ = this.partnerservice.listPartners();
  }

  onLoadPartnerByCode(code: string){
    this.allPartners$ = this.partnerservice.listPartnerByCode(code);
  }

  cancel() {
    this.ref.close(null);
  }

  validateSubmit() {
    return false;
  }
}
