import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApproveJobsComponent } from './client-approve-jobs.component';

describe('ClientApproveJobsComponent', () => {
  let component: ClientApproveJobsComponent;
  let fixture: ComponentFixture<ClientApproveJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientApproveJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApproveJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
