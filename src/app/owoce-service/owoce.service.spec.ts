import { TestBed } from '@angular/core/testing';

import { OwoceService } from './owoce.service';

describe('OwoceService', () => {
  let service: OwoceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwoceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
