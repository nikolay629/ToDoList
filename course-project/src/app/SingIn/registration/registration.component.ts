import { Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent{
  @ViewChild ('form',{static: true}) ngForm: NgForm;
  companyList: any = [];
  clientList: any = [];
  currentUser = "client";
  email: string;
  name: string;
  address: string;
  password: string;
  confirmPassword: string;
  message: string = "";

  constructor(private service: SharedService, 
              private idetifyService: IdentifyUserService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.service.getCompanyList().subscribe(data => { 
      this.companyList = data;
    });
    
    this.service.getClientList().subscribe(data => {
      this.clientList = data;
    });

  }

  onItemChange(value): string {
    return this.currentUser = value;
  }

  userCheck(): boolean{
    if(this.currentUser == "company"){
      return false;
    }
    return true;
  }

  registration(): void{
    if(this.ngForm.value.password != this.ngForm.value.confirmPassword){
      this.message = "Password doesn't match!!"
      return;
    }

    this.companyList.forEach(element => {
      if(element.CompanyEmail == this.ngForm.value.email){
        this.message = "This email already exist";
      }
    });

    this.clientList.forEach(element => {
      if(element.ClientEmail == this.ngForm.value.email){
        this.message = "This email already exist";
      }
    });
    
    if(this.message != ""){
      console.log(this.message);
      return;
    }

    var value;
    if(this.currentUser == "client"){
      value = {
        ClientName: this.ngForm.value.clientName,
        ClientEmail: this.ngForm.value.email,
        ClientAddress: this.ngForm.value.address,
        ClientPassword: this.ngForm.value.password
      };
      this.service.addClient(value).subscribe(client =>{
        alert(client);
      });
      this.idetifyService.clientAccount = value;
    } else {
      value = {
        CompanyName: this.ngForm.value.companyName,
        CompanyEmail: this.ngForm.value.email,
        CompanyAddress: this.ngForm.value.address,
        CompanyPassword: this.ngForm.value.password
      };
      this.service.addCompany(value).subscribe(company =>{
        alert(company);
      });
      this.idetifyService.companyAccount = value;
    }
    
    //this.idetifyService.entered = true;
    //this.idetifyService.enteredUser = this.ngForm.value.email;
    this.router.navigate(["/login"]);
    
  }
}
