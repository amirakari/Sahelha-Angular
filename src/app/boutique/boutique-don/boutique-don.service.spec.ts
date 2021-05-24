import { TestBed } from '@angular/core/testing';

import { BoutiqueDonService } from './boutique-don.service';

describe('BoutiqueDonService', () => {
  let service: BoutiqueDonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueDonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
