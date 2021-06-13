import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-client-approve-jobs',
  templateUrl: './client-approve-jobs.component.html',
  styleUrls: ['./client-approve-jobs.component.scss']
})
export class ClientApproveJobsComponent implements OnInit {
  approveAdList: any = [];
  adList: any = [];
  companyNameList: any = [];
  companyName: string;
  clientAccount: any;
  likeAdList: any = [];
  likes: number = 0;
  constructor(private service: SharedService,
      private identifyService: IdentifyUserService) {
    this.clientAccount = identifyService.clientAccount;
  }

  ngOnInit(): void {
    this.refreshAd();
  }

  refreshAd(){
    this.service.getApproveAdWithClientId(this.clientAccount.ClientId).subscribe(data => {
      this.approveAdList = data;
    });
    this.service.getLikeAdList().subscribe(data => {
      this.likeAdList = data;
    });
  }

  checkLike(ad: any): boolean{
    this.likes = 0;

    this.likeAdList.forEach(element => {
      if(ad.AdId == element.AdId){
        this.likes++;
      }
    });
    return true;
  }
  
  refuse(ad: any){
    if(confirm("Are you sure!")) {
      var value = {
        AdId: ad.AdId,
        CompanyId: ad.CompanyId,
        AdTitle: ad.AdTitle,
        AdInformation: ad.AdInformation,
        AdType: ad.AdType,
        AdCategory: ad.AdCategory,
        AdLikes: ad.AdLikes,
        Approve: "Not Approve"
      };

      this.service.editAd(value).subscribe(data => {
        alert(data);
      });

      this.service.deleteApproveAd("ApproveAdId",ad.ApproveAdId).subscribe(data => {
        alert(data);
        this.refreshAd();
      });
    }
  }
}
