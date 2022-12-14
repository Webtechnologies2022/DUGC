import { TestBed } from '@angular/core/testing';

import { DugcService } from './dugc.service';

describe('DugcService', () => {
  let service: DugcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DugcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
