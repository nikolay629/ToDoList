import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';

@Component({
  selector: 'app-header-company',
  templateUrl: './header-company.component.html',
  styleUrls: ['./header-company.component.scss']
})
export class HeaderCompanyComponent implements OnInit {
  companyAccount: any;
  user: string;

  constructor(private identifyService: IdentifyUserService,
              private router: Router) {
    this.companyAccount = identifyService.companyAccount;
    this.user = identifyService.enteredUser;              
  }

  ngOnInit(): void {
  }

  logOff(){
    this.identifyService.entered = false;
    this.identifyService.enteredUser = "";
    this.identifyService.companyAccount = [];
    this.identifyService.clientAccount = [];
    this.router.navigate(["/login"]);
  }  
}
