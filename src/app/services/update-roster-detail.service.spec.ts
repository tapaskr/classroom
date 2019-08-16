import { TestBed } from '@angular/core/testing';

import { UpdateRosterDetailService } from './update-roster-detail.service';

describe('UpdateRosterDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateRosterDetailService = TestBed.get(UpdateRosterDetailService);
    expect(service).toBeTruthy();
  });
});
