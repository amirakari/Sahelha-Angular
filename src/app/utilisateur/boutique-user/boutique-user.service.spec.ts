import { TestBed } from '@angular/core/testing';

import { BoutiqueUserService } from './boutique-user.service';

describe('BoutiqueUserService', () => {
  let service: BoutiqueUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoutiqueUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
