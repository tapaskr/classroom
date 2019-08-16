import { TestBed } from '@angular/core/testing';

import { GetScheduleDetailService } from './get-schedule-detail.service';

describe('GetScheduleDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetScheduleDetailService = TestBed.get(GetScheduleDetailService);
    expect(service).toBeTruthy();
  });
});
