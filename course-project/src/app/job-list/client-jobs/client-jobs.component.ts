import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-client-jobs',
  templateUrl: './client-jobs.component.html',
  styleUrls: ['./client-jobs.component.scss']
})
export class ClientJobsComponent implements OnInit {
  adList: any = [];
  companyArray: any = [];
  applyList: any = [];
  likeAdList: any = [];
  clientAccount: any;
  companyName = "";
  check: boolean = false;
  likes: number = 0;

  constructor(private service: SharedService, 
              private identifyService: IdentifyUserService,
              private router: Router) {
    this.clientAccount = this.identifyService.clientAccount;
    
    
    this.service.getCompanyList().subscribe(data =>{
      this.companyArray = data;
    });
              
  }

  ngOnInit(): void {
    this.refreshAdList();
  }

  refreshAdList(){
    this.service.getAdList().subscribe(data=>{
      this.adList = data;
    });
    this.service.getLikeAdList().subscribe(data => {
      this.likeAdList = data;
    });
    this.service.getApplyAdClientId(this.clientAccount.ClientId).subscribe(data => {
      this.applyList = data;
    });  
  }

  checkForApply(ad: any, check = true): boolean{
    if(ad.Approve != "Not Approve"){
      return false;
    }

    this.likes = 0;

    this.likeAdList.forEach(element => {
      if(ad.AdId == element.AdId){
        this.likes++;
      }
    });

    this.companyArray.forEach(element => {
      if(ad.CompanyId == element.CompanyId){
        this.companyName = element.CompanyName;
      }
    });

    if(this.applyList == "")
      return true;

    this.applyList.forEach(element => {
      if(ad.AdId == element.AdId){
        check = false;
      }
    });
      
    return check;
  }


  apply(id: number){
    var value = {
      AdId: id,
      ClientId: this.identifyService.clientAccount.ClientId
    };
    this.service.addApplyAd(value).subscribe(data =>{
      alert(data);
      this.refreshAdList();
    });
  }

  checkLike(ad: any, check = false): boolean{
    this.likeAdList.forEach(element => {
      if(ad.AdId == element.AdId && this.identifyService.clientAccount.ClientId == element.ClientId){
        check = true;
      }
    });
    return check;
  }

  like(ad: any){
    var valueLike = {
      AdId: ad.AdId,
      ClientId: this.identifyService.clientAccount.ClientId
    };

    this.service.addLikeAd(valueLike).subscribe(data => {
      alert(data);
      this.refreshAdList();
    });
    
  }

  unLike(ad: any, id = 0){
    this.likeAdList.forEach(element => {
      if(ad.AdId == element.AdId && 
        this.identifyService.clientAccount.ClientId == element.ClientId){
          id = element.LikeAdId;
        }
    });

    this.service.deleteLikeAd("LikeAdId",id).subscribe(data => {
      alert(data);
      this.refreshAdList();
    });
  }
}
