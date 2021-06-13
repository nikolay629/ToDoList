import { Component, OnInit } from '@angular/core';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-client-apply-job-list',
  templateUrl: './client-apply-job-list.component.html',
  styleUrls: ['./client-apply-job-list.component.scss']
})
export class ClientApplyJobListComponent implements OnInit {
  applyAdList: any = [];
  companyNameArray: any = [];
  companyName: string;
  clientAccount: any;
  likeAdList: any = [];
  likes: number = 0;
  constructor(private service: SharedService,
      private identifyService: IdentifyUserService) {
    this.clientAccount = identifyService.clientAccount;
  }

  ngOnInit(): void {
    this.refreshApplyAd();
  }

  refreshApplyAd(){
    this.service.getApplyAdClientId(this.clientAccount.ClientId).subscribe(data => {
      this.applyAdList = data;
    });
    this.service.getLikeAdList().subscribe(data => {
      this.likeAdList = data;
    })
    this.service.getCompanyName().subscribe(data => {
      this.companyNameArray = data;
    })
  }

  checkApprove(ad: any): boolean{
    if(ad.Approve == "Approve"){
      return false;
    }

    this.likes = 0;

    this.likeAdList.forEach(element => {
      if(ad.AdId == element.AdId){
        this.likes++;
      }
    });
    this.companyNameArray.forEach(element => {
      if(ad.CompanyId == element.CompanyId)
        this.companyName = element.CompanyName;
    });

    return true;
  }

  refuse(id: number){
    if(confirm("Are you sure!")){
      this.service.deleteApplyAd("ApplyAdId",id).subscribe(data => {
        alert(data);
        this.refreshApplyAd();
      })
    }
  }

}
