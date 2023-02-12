import { TestBed } from '@angular/core/testing';

import { SpitalGuard } from './spital.guard';

describe('SpitalGuard', () => {
  let guard: SpitalGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SpitalGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
