import { TestBed } from '@angular/core/testing';

import { IdentifyUserService } from './identify-user.service';

describe('IdentifyUserService', () => {
  let service: IdentifyUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IdentifyUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
