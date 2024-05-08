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
  selectedItem: any;
  selectedRole: string;
  allRoles: string[] = ['ADMIN', 'MANAGER', 'CASHIER'];
  data$: any;
  action: string;
  data: any;
  dialogAction: string = "Add";

  constructor(private fb: UntypedFormBuilder, protected ref: NbDialogRef<DialogUserComponent>,
    private userservice: UserService, private partnerservice: PartnerService) { }

  ngOnInit(): void {

    this.firstForm = this.fb.group({
      partner: [null, Validators.required],
      role: [null, Validators.required],
      login: [null, [Validators.required, Validators.pattern(GlobalConstants.loginRegex)]],
      name: [null, [Validators.required, Validators.pattern(GlobalConstants.nameRegex)]],
      phoneNumber: [null, [Validators.required, Validators.pattern(GlobalConstants.contactNumberRegex)]],
      email: [null, [Validators.pattern(GlobalConstants.emailRegex)]],
      password: [null, Validators.required],
      confirmpassword: [null, Validators.required],
    });

    this.onLoadPartner();
    console.log("Action: " + this.action)
    console.log("Element: ",this.data)
    console.log("Element: ",this.data$)
    if(this.action === 'Edit') {
      this.firstForm.patchValue(this.data);
      this.selectedRole = this.data.role;
      this.selectedItem = this.data.partnerCode;
      this.dialogAction = 'Edit';
    }
  }

  onLoadPartner() {
    //this.allPartners$ = this.partnerservice.listPartners();
    this.allPartners$ = this.data$;
  }

  onCreateUser() {
   
    if(this.dialogAction === 'Add') {
      this.editUser();
    }
    else{
      this.addUser();
    }
    
  }

  addUser() {

    var formData = this.firstForm.value;
    console.log("Create User",formData)
    var data = {
      login: formData.login,
      name: formData.name,
      password: formData.password,
      partnerCode: formData.partner.codePartner,
      phoneNumber: formData.phoneNumber,
      email: formData.email,
      role: formData.role
    }

    this.userservice.createUser(data).subscribe(
      (res: User) => {
        console.log("Registered user", res)
      },
      (error) => {
        console.log(error)
      }
    )

  }

  editUser() {
    var formData = this.firstForm.value;
    var data = {
      id: this.data.id,
      login: formData.login
    }
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
        
      }
    )
  }


}
