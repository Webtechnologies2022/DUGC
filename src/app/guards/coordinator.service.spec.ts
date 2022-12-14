import { TestBed } from '@angular/core/testing';

import { CoordinatorService } from './coordinator.service';

describe('CoordinatorService', () => {
  let service: CoordinatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
