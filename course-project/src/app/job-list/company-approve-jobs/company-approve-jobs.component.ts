import { Component, OnInit } from '@angular/core';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-company-approve-jobs',
  templateUrl: './company-approve-jobs.component.html',
  styleUrls: ['./company-approve-jobs.component.scss']
})
export class CompanyApproveJobsComponent implements OnInit {
  approveAdList: any = [];
  likeAdList: any = [];
  companyAccount: any;
  likes: number = 0;


  constructor(private service: SharedService, 
      private identifyService: IdentifyUserService) {
    this.companyAccount = identifyService.companyAccount;
  }

  ngOnInit(): void {
    this.refreshAd();
  }

  refreshAd(){
    this.service.getApproveAdWithCompanyId(this.companyAccount.CompanyId).subscribe(data => {
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
