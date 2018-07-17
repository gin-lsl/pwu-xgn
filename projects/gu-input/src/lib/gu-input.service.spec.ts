import { TestBed, inject } from '@angular/core/testing';

import { GuInputService } from './gu-input.service';

describe('GuInputService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuInputService]
    });
  });

  it('should be created', inject([GuInputService], (service: GuInputService) => {
    expect(service).toBeTruthy();
  }));
});
