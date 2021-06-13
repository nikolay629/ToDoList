import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientApplyJobListComponent } from './client-apply-job-list.component';

describe('ClientApplyJobListComponent', () => {
  let component: ClientApplyJobListComponent;
  let fixture: ComponentFixture<ClientApplyJobListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientApplyJobListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientApplyJobListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
