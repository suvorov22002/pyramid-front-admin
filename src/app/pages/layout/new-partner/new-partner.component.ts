import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'ngx-new-partner',
  templateUrl: './new-partner.component.html',
  styleUrls: ['./new-partner.component.scss']
})
export class NewPartnerComponent implements OnInit {

  firstForm: UntypedFormGroup;
  secondForm: UntypedFormGroup;
  thirdForm: UntypedFormGroup;
  fourthForm: UntypedFormGroup;
  fifthForm: UntypedFormGroup;

  public radioGroupValue: string = 'ACTIVE';
  public gameStatusValue: string = 'ACTIVE';
  public roomGroupValue: string = 'ACTIVE';
  selectedItem;

  constructor(private fb: UntypedFormBuilder) {
  }

  ngOnInit() {

    this.firstForm = this.fb.group({
      status: [''],
      designation: ['', Validators.required],
      localisation: ['', Validators.required],
      codePartenaire: ['']
    });

    this.secondForm = this.fb.group({
      codePartenaire: ['', Validators.required],
      percentage: ['', Validators.required],
      bonusrate: ['', Validators.required],
      bonusmin: ['', Validators.required],
      misemax: ['', Validators.required],
      misemin: ['', Validators.required]
    });

    this.secondForm.patchValue({codePartenaire: "ZERFDVGGH5435A3666"});

    this.thirdForm = this.fb.group({
      codePartenaire: ['', Validators.required],
      percentage: ['', Validators.required],
      bonusrate: ['', Validators.required],
      bonusmin: ['', Validators.required],
      misemax: ['', Validators.required],
      misemin: ['', Validators.required]
    });

    this.thirdForm.patchValue({codePartenaire: "ZERFDVGGH5435A3666"});

    this.fourthForm = this.fb.group({
      status: [''],
      designation: ['', Validators.required],
      localisation: ['', Validators.required],
      codePartenaire: ['']
    });
    this.fourthForm.patchValue({codePartenaire: "ZERFDVGGH5435A3666"});

  }

  onPartnerSubmit() {
    console.log("Submit Infos Partenaires")
    this.firstForm.markAsDirty();
  }

  onParametreSubmit() {
    console.log("Submit Parametres Partenaires")
    this.secondForm.markAsDirty();
  }

  onEnrollSubmit() {
    console.log("Submit Enroll Game")
    this.thirdForm.markAsDirty();
  }

  onRoomCreationSubmit() {
    console.log("Submit Room creation")
    this.thirdForm.markAsDirty();
  }

}
