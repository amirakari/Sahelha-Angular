import { TestBed } from '@angular/core/testing';

import { AjProduitService } from './aj-produit.service';

describe('AjProduitService', () => {
  let service: AjProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
