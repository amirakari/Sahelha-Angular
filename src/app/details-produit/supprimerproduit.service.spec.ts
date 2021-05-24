import { TestBed } from '@angular/core/testing';

import { SupprimerproduitService } from './supprimerproduit.service';

describe('SupprimerproduitService', () => {
  let service: SupprimerproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SupprimerproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
