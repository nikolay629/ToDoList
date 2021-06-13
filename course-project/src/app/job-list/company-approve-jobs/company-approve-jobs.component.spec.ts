import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyApproveJobsComponent } from './company-approve-jobs.component';

describe('CompanyApproveJobsComponent', () => {
  let component: CompanyApproveJobsComponent;
  let fixture: ComponentFixture<CompanyApproveJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyApproveJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyApproveJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
