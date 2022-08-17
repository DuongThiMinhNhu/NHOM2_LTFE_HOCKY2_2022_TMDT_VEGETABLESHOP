import { TestBed } from '@angular/core/testing';

import { HeartService } from './heart.service';

describe('HeartService', () => {
  let service: HeartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
