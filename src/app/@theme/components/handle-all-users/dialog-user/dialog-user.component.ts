import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';
import { Observable } from 'rxjs';
import { Partner } from '../../../../@core/data/partner';
import { PartnerService } from '../../../../@core/services/partner.service';
import { UserService } from '../../../../@core/services/user.service';
import { GlobalConstants } from '../../../shared/global-constants';
import { User } from '../../../../@core/data/users';


@Component({
  selector: 'ngx-dialog-user',
  templateUrl: './dialog-user.component.html',
  styleUrls: ['./dialog-user.component.scss']
})
export class DialogUserComponent implements OnInit {

  firstForm: UntypedFormGroup;
  isLoading: boolean = false;
  allPartners$: Observable<Partner[]> = new Observable<Partner[]>();
  allPartners: string[] = [];
  selectedItem: string;
  selectedRole: string;
  allRoles: string[] = ['ADMIN', 'MANAGER', 'CASHIER'];
  data$: any;
  action: string;
  data: any;
  dialogAction: string = "Add";
  currentPartner: Partner;

  constructor(private fb: UntypedFormBuilder, protected ref: NbDialogRef<DialogUserComponent>,
    private userservice: UserService, private partnerservice: PartnerService) { }

  ngOnInit(): void {

    this.firstForm = this.fb.group({
      partnerCode: [null, Validators.required],
      role: [null, Validators.required],
      login: [null, [Validators.required, Validators.pattern(GlobalConstants.loginRegex)]],
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      email: [null, [Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, Validators.required],
      confirmpassword: [null, Validators.required],
    });

    
    this.onLoadPartner();
   
    if(this.action === 'Edit') {

      this.selectedRole = this.data.role;
      this.selectedItem = this.data.partnerCode;
     
      this.dialogAction = 'Edit';
      this.firstForm.patchValue(this.data);

    }
    else{
      this.onLoadPartner();
    }
  }

  onLoadPartner() {
    //this.allPartners$ = this.partnerservice.listPartners();
    this.allPartners$ = this.data$;
    this.data$.subscribe(
      (data: Partner[]) => {
        this.allPartners = data.map(p => p.designation)
      }
    )
  }

  onCreateUser() {
   
    if(this.dialogAction === 'Edit') {
      this.editUser();
    }
    else{
      this.addUser();
    }
    
  }

  addUser() {

    var formData = this.firstForm.value;
    
    var data = {
      login: formData.login,
      name: formData.name,
      password: formData.password,
      partnerCode: formData.partnerCode,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      role: formData.role
    }

    this.isLoading = true;

    this.userservice.createUser(data).subscribe(
      (res: User) => {
        setTimeout(
          () => {
            this.isLoading = false;
            this.ref.close(res);
          }, 1000
        )
      },
      (error) => {
        console.log(error);
        this.isLoading = false;
      }
    )

  }

  editUser() {
    var formData = this.firstForm.value;
    var data = {
      id: this.data.id,
      login: formData.login
    }
    console.log("Edit",data)
  }

  cancel() {
    this.ref.close(null);
  }

  validateSubmit() {

    if (this.firstForm.controls['password'].value !== this.firstForm.controls['confirmpassword'].value) {
      return true;
    }

    return false;
  }

  fillCurrentPartner(){
    this.allPartners$.subscribe(
      (data: Partner[]) => {
        this.currentPartner = data.find(p => p.designation === this.data.partnerCode)
       // this.selectedItem = this.currentPartner;
      }
    )
  }


}
