import { TestBed } from '@angular/core/testing';

import { GetClassDetailService } from './get-class-detail.service';

describe('GetClassDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetClassDetailService = TestBed.get(GetClassDetailService);
    expect(service).toBeTruthy();
  });
});
