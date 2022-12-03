import { TestBed } from '@angular/core/testing';

import { SemServiceService } from './sem-service.service';

describe('SemServiceService', () => {
  let service: SemServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
