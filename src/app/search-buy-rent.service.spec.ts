import { TestBed } from '@angular/core/testing';

import { SearchBuyRentService } from './search-buy-rent.service';

describe('SearchBuyRentService', () => {
  let service: SearchBuyRentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBuyRentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
