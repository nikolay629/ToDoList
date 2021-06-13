import { Component, Input, OnInit } from '@angular/core';
import { IdentifyUserService } from 'src/app/identify-user.service';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-company-jobs',
  templateUrl: './company-jobs.component.html',
  styleUrls: ['./company-jobs.component.scss']
})
export class CompanyJobsComponent implements OnInit {
  likeAdList: any = [];
  likes: number = 0;
  adList: any = [];
  companyNameArray: any = [];
  companyName = "";
  companyAccount: any;
  
  constructor(private service: SharedService, private identifyService: IdentifyUserService) {
    this.service.getCompanyName().subscribe(data =>{
      this.companyNameArray = data;
    });
    this.companyAccount = this.identifyService.companyAccount;
  }

  ngOnInit(): void {
    this.refreshAdList();
  }

  refreshAdList(){
    this.service.getAdList().subscribe(data =>{
      this.adList = data;
    });
    this.service.getCompanyName().subscribe(data =>{
      this.companyNameArray = data;
    });
    this.service.getLikeAdList().subscribe(data => {
      this.likeAdList = data;
    })
  };

  // checkForCompanyName(ad: any): string{
  //   this.companyNameArray.forEach(element => {
  //     if(ad.CompanyId == element.CompanyId){
  //       this.companyName = element.CompanyName;
  //     }
  //   }); 

    

  //   return this.companyName;
  // }

  checkAd(ad: any): boolean{
    if(ad.CompanyId != this.companyAccount.CompanyId)
      return false;

    this.likes = 0;

    this.likeAdList.forEach(element => {
      if(ad.AdId == element.AdId){
        this.likes++;
      }
    });
    return true;
  }

  deleteAd(id: any){
    if(confirm("Are you sure!")){
      console.log(id);
      this.service.deleteApplyAd("AdId",id).subscribe(data => {
        alert(data);
      });

      this.service.deleteApproveAd("AdId",id).subscribe(data => {
        alert(data);
      });

      this.service.deleteLikeAd("AdId",id).subscribe(data => {
        alert(data);
      });

      this.service.deleteAd(id).subscribe(data => {
        alert(data);
        this.refreshAdList();
      });
      
    }
  }
}
