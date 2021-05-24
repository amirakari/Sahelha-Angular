import { TestBed } from '@angular/core/testing';

import { DetailsProduitService } from './details-produit.service';

describe('DetailsProduitService', () => {
  let service: DetailsProduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsProduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
