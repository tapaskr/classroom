import { TestBed } from '@angular/core/testing';

import { UpdateClassCommentService } from './update-class-comment.service';

describe('UpdateClassCommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateClassCommentService = TestBed.get(UpdateClassCommentService);
    expect(service).toBeTruthy();
  });
});
