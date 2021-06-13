import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateJobAdComponent } from './create-job-ad.component';

describe('CreateJobAdComponent', () => {
  let component: CreateJobAdComponent;
  let fixture: ComponentFixture<CreateJobAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateJobAdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateJobAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
