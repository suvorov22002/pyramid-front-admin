import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { GlobalConstants } from '../../../@theme/shared/global-constants';
import { PartnerService } from '../../../@core/services/partner.service';
import { Partner } from '../../../@core/data/partner';
import { NbDialogService } from '@nebular/theme';
import { DialogNamePromptComponent } from '../../../@theme/components/dialog-name-prompt/dialog-name-prompt.component';
import { RequestResponse } from '../../../@core/data';
import { Parameter, ParameterResponse } from '../../../@core/data/parameter';
import { ParameterService } from '../../../@core/services/parameter.service';
import { Enrollment } from '../../../@core/data/enrollment';
import { EnrollmentService } from '../../../@core/services/enrollment.service';
import { Game } from '../../../@core/data/game';
import { SalleService } from '../../../@core/services/salle.service';
import { Salle } from '../../../@core/data/salle';

@Component({
  selector: 'ngx-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.scss']
})
export class NewPartnerComponent implements OnInit {

  firstForm: UntypedFormGroup;
  //firstForm: any = FormGroup;
  secondForm: UntypedFormGroup;
  thirdForm: UntypedFormGroup;
  fourthForm: UntypedFormGroup;
  fifthForm: UntypedFormGroup;

  public radioGroupValue: string = 'ACTIVE';
  public gameStatusValue: string = 'ENROLLED';
  public roomGroupValue: string = 'ACTIVE';
  selectedItem;

  alreadyCreated: boolean = false;
  isLoading: boolean = false;
  createdPartner: Partner;
  parameter: Parameter;
  games: Game[] = [
    {code: 'KENO', designation: 'KENO'},
    {code: 'BINGO', designation: 'BINGO'}
  ] 

  get codePartenaire(): AbstractControl {
    return this.firstForm.get('codePartenaire');
  }

  constructor(private fb: UntypedFormBuilder, private formbuilder: FormBuilder,
    private partnerService: PartnerService, private dialogService: NbDialogService, private parameterService: ParameterService,
    private enrollService: EnrollmentService, private roomservice: SalleService) {
  }

  ngOnInit() {

    this.parameter = {
      miseMin: 100,
      miseMax: 10000,
      percent: 92,
      bonusRate: 5,
      bonusMax: 1000
    }

    this.firstForm = this.fb.group({
      status: ['ACTIVE'],
      designation: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      localisation: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      codePartenaire: [null]
    });

    this.secondForm = this.fb.group({
      codePartenaire: ['', Validators.required],
      percentage: ['', Validators.required],
      bonusrate: ['', Validators.required],
      bonusmin: ['', Validators.required],
      misemax: ['', Validators.required],
      misemin: ['', Validators.required]
    });

    this.thirdForm = this.fb.group({
      codePartenaire: ['', Validators.required],
      percentage: ['', Validators.required],
      bonusrate: ['', Validators.required],
      bonusmin: ['', Validators.required],
      misemax: ['', Validators.required],
      misemin: ['', Validators.required],
      game: ['']
    });


    this.fourthForm = this.fb.group({
      status: ['ACTIVE'],
      designation: ['', Validators.required],
      localisation: ['', Validators.required],
      codePartenaire: ['']
    });

  }

  onPartnerSubmit(event) {
    var formData = this.firstForm.value;

    const data: Partner = {
      status: formData.status,
      designation: formData.designation,
      localisation: formData.localisation
    }

    this.isLoading = true;
    console.log("Submit Infos Partenaires: ", data)

    // if partner have not created yet
    if (!this.alreadyCreated) {
      this.partnerService.createNewPartner(data).subscribe(
        (resp: RequestResponse<Partner>) => {

          this.createdPartner = resp?.data[0];
          this.firstForm.patchValue({ codePartenaire: this.createdPartner.codePartner });
          this.alreadyCreated = true;
          setTimeout(() => {
            this.isLoading = false
            event.next();
            this.defaultParamValue();
          }, 3000);

        },
        (error) => {
          this.isLoading = false
          console.log("Error", error.error)
        }
      )
    }
    else {
      console.log("Already created, wanna update informations?")
      this.isLoading = false
      this.open3(event)
    }

  }

  onParametreSubmits(event) {
    event.next();
  }

  onParametreSubmit(event) {

    var formData = this.secondForm.value;
    const data: Parameter = {
      partner: formData.codePartenaire,
      percent: formData.percentage,
      bonusRate: formData.bonusrate,
      bonusMax: formData.bonusmin,
      miseMax: formData.misemax,
      miseMin: formData.misemin
    }

    this.isLoading = true;

    this.parameterService.updateParameter(this.createdPartner.id, data).subscribe(
      (resp: ParameterResponse) => {
        console.log(resp)
        setTimeout(() => {
          this.isLoading = false
          event.next();
          this.defaultEnrollValue(resp);
        }, 1000);
      },
      (error) => {
        console.log(error)
        this.isLoading = false
      }
    )

  }

  onEnrollSubmit(event) {

    console.log("Submit Enroll Game:", this.selectedItem)
    if (this.selectedItem === '' || this.selectedItem === undefined) {

      this.fourthForm.patchValue({ codePartenaire: this.createdPartner.codePartner });
      event.next();
      
    }
    else {
      var formData = this.thirdForm.value;
      const data: Enrollment = {
        partner: formData.codePartenaire,
        percent: formData.percentage,
        bonusRate: formData.bonusrate,
        bonusMax: formData.bonusmin,
        miseMax: formData.misemax,
        miseMin: formData.misemin,
        game: formData.game,
        status: this.gameStatusValue
      }
      console.log("Subscription au jeu", data)

      this.isLoading = true;
      this.enrollService.enrollGame(data).subscribe(
        (resp: Enrollment) => {
          console.log(resp)
          setTimeout(() => {
            this.isLoading = false
            this.fourthForm.patchValue({ codePartenaire: this.createdPartner.codePartner });
            event.next();
          }, 1000);
        },
        (error) => {
          console.log(error)
          this.isLoading = false
        }
      )
    }

  }

  onRoomCreationSubmit(event) {
    var formData = this.fourthForm.value;
    const data: Salle = {
      designation: formData.designation,
      localisation: formData.localisation,
      status: formData.status,
      partnerCode: formData.codePartenaire,
    }
    console.log("Submit Room creation", formData)
    this.isLoading = true

    this.roomservice.createRoom(data).subscribe(
      (resp: Salle) => {
        console.log("Response Room",resp)
        setTimeout(() => {
          this.isLoading = false
          event.next();
        }, 1000);
      },
      (error) => {
        console.log(error)
      }
    )
    
  }

  validateSubmit() {
    return false;
  }

  isPartnerExists() {
    return !this.alreadyCreated;
  }

  open3(event) {
    this.dialogService.open(DialogNamePromptComponent)
      .onClose.subscribe(confirm => {
        if (confirm) {


          var formData = this.firstForm.value;
          const data: Partner = {
            ...this.createdPartner,
            status: formData.status,
            designation: formData.designation,
            localisation: formData.localisation,
            codePartner: formData.codePartenaire
          }
          console.log("confirmed", data)
          this.isLoading = true;
          this.partnerService.updatePartner(data).subscribe(
            (resp: any) => {
              console.log("updated:", resp)
              this.isLoading = false;
              event.next();
            },
            (error) => {
              this.isLoading = false;
              console.log(error?.error.message)
            }
          )

        }
        else {
          event.next();
        }

      });
  }

  updatePartner() {

  }

  defaultParamValue() {
    this.secondForm.patchValue({ percentage: this.parameter.percent });
    this.secondForm.patchValue({ misemin: this.parameter.miseMin });
    this.secondForm.patchValue({ misemax: this.parameter.miseMax });
    this.secondForm.patchValue({ bonusmin: this.parameter.bonusMax });
    this.secondForm.patchValue({ bonusrate: this.parameter.bonusRate });
    this.secondForm.patchValue({ codePartenaire: this.createdPartner.codePartner });
  }

  defaultEnrollValue(param: any) {
    this.thirdForm.patchValue({ percentage: param.percent });
    this.thirdForm.patchValue({ misemin: param.miseMin });
    this.thirdForm.patchValue({ misemax: param.miseMax });
    this.thirdForm.patchValue({ bonusmin: param.bonusMax });
    this.thirdForm.patchValue({ bonusrate: param.bonusRate });
    this.thirdForm.patchValue({ codePartenaire: this.createdPartner.codePartner });
  }


}
