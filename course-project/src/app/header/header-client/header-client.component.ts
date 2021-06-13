import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';

@Component({
  selector: 'app-header-client',
  templateUrl: './header-client.component.html',
  styleUrls: ['./header-client.component.scss']
})
export class HeaderClientComponent implements OnInit {
  clientAccount: any;
  user: string;

  constructor(private identifyService: IdentifyUserService,
              private router: Router) { 
    this.clientAccount = this.identifyService.clientAccount;
    this.user = this.identifyService.enteredUser;
  }

  ngOnInit(): void {
  }

  logOff(){
    this.identifyService.entered = false;
    this.identifyService.enteredUser = "";
    this.identifyService.clientAccount = [];
    this.identifyService.companyAccount = [];
    this.router.navigate(["/login"]);
  }  

}
