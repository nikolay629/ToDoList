import { Component, OnInit, ViewChild } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { NgForm } from "@angular/forms";
import { Router, RouterLink } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form', {static: true}) ngForm: NgForm;
  clientList: any=[];
  companyList: any=[];
  currentUser = "client";
  email: string;
  password: string;
  enter: boolean = false;
  message: string;
  constructor(private service: SharedService,
        private router: Router,
        private identifyService: IdentifyUserService) {
  }

  ngOnInit(): void {
    this.getClient();
    this.getCompany();
  }

  getClient(){
    this.service.getClientList().subscribe(data =>{
      this.clientList = data;
    });
  }

  getCompany(){
    this.service.getCompanyList().subscribe(data =>{
      this.companyList = data;
    });
  }
  
  changeUser(value): string{
    return this.currentUser = value;
  }

  login(): void{
    this.email = this.ngForm.value.email;
    this.password = this.ngForm.value.password;

    if(this.currentUser == "client"){
      this.clientList.forEach(element => {
        if(this.email == element.ClientEmail && this.password == element.ClientPassword){
          this.enter = true;
          this.identifyService.clientAccount = element;
        }
      });
    } else {
      this.companyList.forEach(element => {
        if(this.email == element.CompanyEmail && this.password == element.CompanyPassword){
          this.enter = true;
          this.identifyService.companyAccount = element;
        }
      });
    }

    if(this.enter){
      this.identifyService.entered = true;
      this.identifyService.enteredUser = this.email;
      this.router.navigate(["/home"]);
    } else {
      this.message = "Wrong email or password! Please try again!";
    }
    
  }

}
