import { TestBed } from '@angular/core/testing';

import { RoutePathsService } from './route-paths.service';

describe('RoutePathsService', () => {
  let service: RoutePathsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutePathsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
