import { TestBed } from '@angular/core/testing';

import { SinginService } from './singin.service';

describe('SinginService', () => {
  let service: SinginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SinginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
