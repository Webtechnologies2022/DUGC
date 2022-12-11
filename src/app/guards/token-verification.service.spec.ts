import { TestBed } from '@angular/core/testing';

import { TokenVerificationService } from './token-verification.service';

describe('TokenVerificationService', () => {
  let service: TokenVerificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenVerificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
