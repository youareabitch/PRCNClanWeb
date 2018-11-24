import { TestBed } from '@angular/core/testing';

import { AttackRecordService } from './attack-record.service';

describe('AttackRecordService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttackRecordService = TestBed.get(AttackRecordService);
    expect(service).toBeTruthy();
  });
});
