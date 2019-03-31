import { TestBed } from '@angular/core/testing';

import { HandsyService } from './handsy.service';

describe('HandsyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HandsyService = TestBed.get(HandsyService);
    expect(service).toBeTruthy();
  });
});
