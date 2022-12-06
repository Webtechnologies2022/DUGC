import { TestBed } from '@angular/core/testing';

import { AuthMainService } from './auth-main.service';

describe('AuthMainService', () => {
  let service: AuthMainService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthMainService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
