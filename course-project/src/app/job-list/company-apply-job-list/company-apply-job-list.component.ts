import { Component, OnInit } from '@angular/core';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-company-apply-job-list',
  templateUrl: './company-apply-job-list.component.html',
  styleUrls: ['./company-apply-job-list.component.scss']
})
export class CompanyApplyJobListComponent implements OnInit {
  adList: any = [];
  applyAdList: any = [];
  clientList: any = [];
  clientName: string;
  companyAccount: any;
  constructor(private service: SharedService,
      private identifyService: IdentifyUserService) {
    this.companyAccount = this.identifyService.companyAccount;
  }

  ngOnInit(): void {
    this.refreshAd();
  }

  refreshAd(){
    this.service.getAdById("CompanyId",this.companyAccount.CompanyId).subscribe(data => { 
      this.adList = data;
    });
    this.service.getApplyAdCompanyId(this.companyAccount.CompanyId).subscribe(data => {
      this.applyAdList = data;
    });
    this.service.getClientList().subscribe(data => {
      this.clientList = data;
    });
  }

  approve(ad: any, apply: any){
    if(confirm("Are you sure!")){

      var valueAd = {
        AdId: ad.AdId,
        CompanyId: this.identifyService.companyAccount.CompanyId,
        AdTitle: ad.AdTitle,
        AdInformation: ad.AdInformation,
        AdType: ad.AdType,
        AdCategory: ad.AdCategory,
        AdLikes: ad.AdLikes,
        Approve: "Approve"
      };
      
      this.applyAdList.forEach(element => {
        if(element.AdId == ad.AdId){
          this.service.deleteApplyAd("ApplyAdId",element.ApplyAdId).subscribe(data => {
            alert(data);
          });
        }
      });

      this.service.editAd(valueAd).subscribe(data => {
        alert(data);
      });

      var valueApprove = {
        AdId: ad.AdId,
        ClientId: apply.ClientId
      };
      this.service.addApproveAd(valueApprove).subscribe(data => {
        alert(data);
        this.refreshAd();
      });
    }
  }


  refuse(id: number){
    if(confirm("Are you sure!")){
      this.service.deleteApplyAd("ApplyAdId",id).subscribe(data => {
        alert(data);
        this.refreshAd();
      });
    }
  }

}
