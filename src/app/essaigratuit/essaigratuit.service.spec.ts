import { TestBed } from '@angular/core/testing';

import { EssaigratuitService } from './essaigratuit.service';

describe('EssaigratuitService', () => {
  let service: EssaigratuitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EssaigratuitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
