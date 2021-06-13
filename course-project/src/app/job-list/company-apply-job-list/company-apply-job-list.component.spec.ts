import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyApplyJobListComponent } from './company-apply-job-list.component';

describe('CompanyApplyJobListComponent', () => {
  let component: CompanyApplyJobListComponent;
  let fixture: ComponentFixture<CompanyApplyJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyApplyJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyApplyJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
