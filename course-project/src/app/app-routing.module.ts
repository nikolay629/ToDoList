import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./SingIn/login/login.component";
import { RegistrationComponent } from "./SingIn/registration/registration.component";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { JobListComponent } from "./job-list/job-list.component";
import { CreateJobAdComponent } from "./create-job-ad/create-job-ad.component";
import { ClientApplyJobListComponent } from "./job-list/client-apply-job-list/client-apply-job-list.component";
import { CompanyApplyJobListComponent } from "./job-list/company-apply-job-list/company-apply-job-list.component";
import { ClientApproveJobsComponent } from "./job-list/client-approve-jobs/client-approve-jobs.component";
import { CompanyApproveJobsComponent } from "./job-list/company-approve-jobs/company-approve-jobs.component";
import { ClientProfileComponent } from "./profile/client-profile/client-profile.component";
import { CompanyProfileComponent } from "./profile/company-profile/company-profile.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'job', component: JobListComponent},
  {path: 'client-apply-job', component: ClientApplyJobListComponent},
  {path: 'client-approve-jobs', component: ClientApproveJobsComponent},
  {path: 'client-profile', component: ClientProfileComponent},
  {path: 'company-apply-job', component: CompanyApplyJobListComponent},
  {path: 'company-approve-jobs', component: CompanyApproveJobsComponent},
  {path: 'company-profile', component: CompanyProfileComponent},
  {path: 'create-job-ad', component: CreateJobAdComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
