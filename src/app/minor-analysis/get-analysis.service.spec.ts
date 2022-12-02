import { TestBed } from '@angular/core/testing';

import { GetAnalysisService } from './get-analysis.service';

describe('GetAnalysisService', () => {
  let service: GetAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
