import { TestBed } from '@angular/core/testing';

import { EvaluerService } from './evaluer.service';

describe('EvaluerService', () => {
  let service: EvaluerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvaluerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
