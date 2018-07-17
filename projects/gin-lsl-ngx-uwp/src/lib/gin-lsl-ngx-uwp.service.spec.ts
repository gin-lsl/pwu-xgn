import { TestBed, inject } from '@angular/core/testing';

import { GinLslNgxUwpService } from './gin-lsl-ngx-uwp.service';

describe('GinLslNgxUwpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GinLslNgxUwpService]
    });
  });

  it('should be created', inject([GinLslNgxUwpService], (service: GinLslNgxUwpService) => {
    expect(service).toBeTruthy();
  }));
});
