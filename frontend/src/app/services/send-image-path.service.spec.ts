import { TestBed } from '@angular/core/testing';

import { SendImagePathService } from './send-image-path.service';

describe('SendImagePathService', () => {
  let service: SendImagePathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendImagePathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
