import { TestBed } from '@angular/core/testing';

import { TransmitePacientService } from './transmite-pacient.service';

describe('TransmitePacientService', () => {
  let service: TransmitePacientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransmitePacientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
