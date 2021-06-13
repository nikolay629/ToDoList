import { Component, OnInit } from '@angular/core';
import { SharedService } from "src/app/shared.service";
import { IdentifyUserService } from '../identify-user.service';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {

  AdList: any=[];
  companyNameArray: any=[];
  companyName = "";
  companyAccount: any;
  clientAccount: any;
  
  constructor(private service: SharedService, private identifyService: IdentifyUserService) { 
    this.companyAccount = this.identifyService.companyAccount;
    this.clientAccount = this.identifyService.clientAccount;
  }

  ngOnInit(): void {
    this.refreshAdList();
  }

  refreshAdList(){
    this.service.getAdList().subscribe(data =>{
      this.AdList = data;
    });
  }

  checkUser(): boolean{
    if(this.clientAccount != "")
      return true;
    return false;
  }


  checkForCompanyName(id: any): boolean{
    this.companyAccount.forEach(element => {
      if(id == element.CompanyId){
        this.companyName = element.CompanyName;
      }
    });
    return true;
  }

  companyNameCheck(name: string): boolean{
    if(name != this.companyName)
        return false;
    
    return true;
  }

}
