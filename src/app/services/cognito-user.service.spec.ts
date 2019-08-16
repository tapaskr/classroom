import { TestBed } from '@angular/core/testing';

import { CognitoUserService } from './cognito-user.service';

describe('CognitoUserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CognitoUserService = TestBed.get(CognitoUserService);
    expect(service).toBeTruthy();
  });
});
