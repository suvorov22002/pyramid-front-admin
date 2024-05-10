import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { GlobalConstants } from '../../../../shared/global-constants';
import { NbDialogRef } from '@nebular/theme';
import { SalleService } from '../../../../../@core/services/salle.service';
import { Salle } from '../../../../../@core/data/salle';
import { PartnerService } from '../../../../../@core/services/partner.service';
import { Observable } from 'rxjs';
import { Partner } from '../../../../../@core/data/partner';

@Component({
  selector: 'ngx-dialog-room',
  templateUrl: './dialog-room.component.html',
  styleUrls: ['./dialog-room.component.scss']
})
export class DialogRoomComponent implements OnInit {

  firstForm: UntypedFormGroup;
  isLoading: boolean = false;
  allPartners$: Observable<Partner[]> = new Observable<Partner[]>();
  selectedItem: any;

  constructor(private fb: UntypedFormBuilder, protected ref: NbDialogRef<DialogRoomComponent>,
    private roomservice: SalleService, private partnerservice: PartnerService) { }

  ngOnInit(): void {

    this.firstForm = this.fb.group({
      partner: [null, Validators.required],
      designation: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      localisation: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      codeSalle: [null]
    });

    this.onLoadPartner();

  }

  onCreateRoom() {
    var formData = this.firstForm.value;
    var data = {
      partnerCode: formData.partner.designation,
      designation: formData.designation,
      localisation: formData.localisation,
      status: 'INACTIVE'
    }
    this.isLoading = true;
    
    this.roomservice.createRoom(data).subscribe(
      (res: Salle) => {
        setTimeout(
          () => {
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
