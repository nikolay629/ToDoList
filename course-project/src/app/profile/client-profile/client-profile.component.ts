import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.scss']
})
export class ClientProfileComponent implements OnInit {
  @ViewChild('form', {static: true}) ngForm: NgForm;
  clientAccount: any;
  editIsClick: boolean = false;
  email: string = "";
  name: string = "";
  address: string = "";
  password: string = "";

  constructor(private identifyService: IdentifyUserService,
            private service: SharedService,
            private router: Router) {
    this.clientAccount = this.identifyService.clientAccount;
  }

  ngOnInit(): void {
  }
  
  editForm(){
    this.editIsClick = true;
  }

  edit(){
    this.email = this.ngForm.value.email;
    if(this.email == "")
      this.email = this.clientAccount.ClientEmail;

    this.name = this.ngForm.value.name;
    if(this.name == "")
      this.name = this.clientAccount.ClientName;

    this.address = this.ngForm.value.address;
    if(this.address == "")
      this.address = this.clientAccount.ClientAddress;

    this.password = this.ngForm.value.password;
    if(this.password == "")
      this.password = this.clientAccount.ClientPassword;

     
    var value = {
      ClientId: this.clientAccount.ClientId,
      ClientName: this.name,
      ClientEmail: this.email,
      ClientAddress: this.address,
      ClientPassword: this.password
    }

    this.service.editClient(value).subscribe(data => {
      alert(data);
    });

    this.identifyService.entered = false;
    this.identifyService.enteredUser = "";
    this.identifyService.clientAccount = [];
    this.identifyService.companyAccount = [];
    this.router.navigate(["/login"]);

  }

  deleteAccount(){


    this.service.deleteApplyAd("ClientId",this.clientAccount.ClientId).subscribe(data => {
      alert(data);
    });

    this.service.deleteApproveAd("ClientId", this.clientAccount.ClientId).subscribe(data => {
      alert(data);
    })

    this.service.deleteLikeAd("ClientId", this.clientAccount.ClientId).subscribe(data => {
      alert(data);
    });

    
    this.service.deleteClient(this.clientAccount.ClientId).subscribe(data => {
      alert(data);
    });
  }
}
