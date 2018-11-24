import { TestBed } from '@angular/core/testing';

import { BossServiceService } from './boss-service.service';

describe('BossServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BossServiceService = TestBed.get(BossServiceService);
    expect(service).toBeTruthy();
  });
});
