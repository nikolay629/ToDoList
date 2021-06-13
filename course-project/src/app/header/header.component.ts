import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentifyUserService } from '../identify-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  entered: boolean;
  enteredUser: string;
  companyAccount: any;
  clientAccount: any;

  constructor(private identifyService: IdentifyUserService,
            private router: Router) { 
  }

  ngOnInit(): void {
    this.checkEntered();
  }

  checkEntered(): boolean{
    this.enteredUser = this.identifyService.enteredUser;
    this.companyAccount = this.identifyService.companyAccount;
    this.clientAccount = this.identifyService.clientAccount;
    return this.entered = this.identifyService.entered;
  }

  checkClient(){
    if(this.clientAccount == "")
      return false;
    return true;
  }

}
