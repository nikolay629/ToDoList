import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IdentifyUserService } from '../identify-user.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-create-job-ad',
  templateUrl: './create-job-ad.component.html',
  styleUrls: ['./create-job-ad.component.scss']
})
export class CreateJobAdComponent implements OnInit {
  @ViewChild ('form',{static: true}) ngForm: NgForm;
  jobType = [
    "Permanent job",
    "Temporary job",
    "Itern",
    "Part-time",
    "Full time",
    "For students"
  ];

  categories = [
    "Development",
    "Office administration",
    "Education",
    "Security",
    "Management",
    "HR",
    "Building",
    "Driver",
    "Medicine",
    "Legal services",
    "Finance"
  ];

  title: string;
  type: string;
  category: string;
  information: string;
  companyAccount: any;

  constructor(private service: SharedService,
              private identifyService: IdentifyUserService,
              private router: Router) {
    this.companyAccount = this.identifyService.companyAccount;
  }

  ngOnInit(): void {
  }

  publishAd(){
    var value = {
      CompanyId: this.companyAccount.CompanyId,
      AdTitle: this.ngForm.value.title,
      AdInformation: this.ngForm.value.information,
      AdType: this.ngForm.value.type,
      AdCategory: this.ngForm.value.category,
      Approve: "Not Approve"
    };
    this.service.addAd(value).subscribe(ad => {
      alert(ad);
    });
    
    this.router.navigate(["/job"]);

  }
}
