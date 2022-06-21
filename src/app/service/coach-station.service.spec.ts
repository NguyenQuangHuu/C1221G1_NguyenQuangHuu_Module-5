import { TestBed } from '@angular/core/testing';

import { CoachStationService } from './coach-station.service';

describe('CoachStationService', () => {
  let service: CoachStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoachStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
