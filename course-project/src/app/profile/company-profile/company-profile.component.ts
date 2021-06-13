import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  @ViewChild('form', {static: true}) ngForm: NgForm;
  adByIdList: any = [];
  companyAccount: any;
  editIsClick: boolean = false;
  email: string = "";
  name: string = "";
  address: string = "";
  password: string = "";

  constructor(private service: SharedService,
        private identifyService: IdentifyUserService,
        private router: Router) {
    this.companyAccount = identifyService.companyAccount;
  }

  ngOnInit(): void {
  }

  editForm(){
    this.editIsClick = true;
  }

  edit(){
    this.email = this.ngForm.value.email;
    if(this.email == "")
      this.email = this.companyAccount.CompanyEmail;

    this.name = this.ngForm.value.name;
    if(this.name == "")
      this.name = this.companyAccount.CompanyName;

    this.address = this.ngForm.value.address;
    if(this.address == "")
      this.address = this.companyAccount.CompanyAddress;

    this.password = this.ngForm.value.password;
    if(this.password == "")
      this.password = this.companyAccount.CompanyPassword;

     
    var value = {
      CompanyId: this.companyAccount.CompanyId,
      CompanyName: this.name,
      CompanyEmail: this.email,
      CompanyAddress: this.address,
      CompanyPassword: this.password
    }

    this.service.editCompany(value).subscribe(data => {
      alert(data);
    });

    this.identifyService.entered = false;
    this.identifyService.enteredUser = "";
    this.identifyService.clientAccount = [];
    this.identifyService.companyAccount = [];
    this.router.navigate(["/login"]);
  }

  deleteAccount(){

    this.service.getAdById("CompanyId",this.companyAccount.CompanyId).subscribe(data => {
      this.adByIdList = data;
    });

    this.adByIdList.forEach(element => {
      
      this.service.deleteApproveAd("AdId",element.AdId).subscribe(data => {
        alert(data);
      });

      this.service.deleteLikeAd("AdId",element.AdId).subscribe(data => {
        alert(data);
      });

      this.service.deleteApplyAd("AdId",element.AdId).subscribe(data => {
        alert(data);
      });

    });

    
    this.service.deleteCompany(this.companyAccount.CompanyId).subscribe(data => {
      alert(data);
    });
    
  }

}
