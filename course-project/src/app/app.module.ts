import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent} from './SingIn/login/login.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './SingIn/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { JobListComponent } from './job-list/job-list.component';
import { CreateJobAdComponent } from './create-job-ad/create-job-ad.component';
import { SharedService } from "./shared.service";
import { HttpClientModule } from "@angular/common/http";
import { IdentifyUserService } from './identify-user.service';
import { HeaderCompanyComponent } from './header/header-company/header-company.component';
import { HeaderClientComponent } from './header/header-client/header-client.component';
import { CompanyJobsComponent } from './job-list/company-jobs/company-jobs.component';
import { ClientJobsComponent } from './job-list/client-jobs/client-jobs.component';
import { CompanyApplyJobListComponent } from './job-list/company-apply-job-list/company-apply-job-list.component';
import { ClientApplyJobListComponent } from './job-list/client-apply-job-list/client-apply-job-list.component';
import { ClientApproveJobsComponent } from './job-list/client-approve-jobs/client-approve-jobs.component';
import { CompanyApproveJobsComponent } from './job-list/company-approve-jobs/company-approve-jobs.component';
import { ClientProfileComponent } from './profile/client-profile/client-profile.component';
import { CompanyProfileComponent } from './profile/company-profile/company-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    HomeComponent,
    JobListComponent,
    CreateJobAdComponent,
    HeaderCompanyComponent,
    HeaderClientComponent,
    CompanyJobsComponent,
    ClientJobsComponent,
    CompanyApplyJobListComponent,
    ClientApplyJobListComponent,
    ClientApproveJobsComponent,
    CompanyApproveJobsComponent,
    ClientProfileComponent,
    CompanyProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SharedService, IdentifyUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
