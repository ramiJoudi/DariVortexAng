import { TestBed } from '@angular/core/testing';

import { ResetGuard } from './reset.guard';

describe('ResetGuard', () => {
  let guard: ResetGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ResetGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
