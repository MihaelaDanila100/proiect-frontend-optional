import { TestBed } from '@angular/core/testing';

import { TrimiteConsultatieService } from './trimite-consultatie.service';

describe('TrimiteConsultatieService', () => {
  let service: TrimiteConsultatieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrimiteConsultatieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
