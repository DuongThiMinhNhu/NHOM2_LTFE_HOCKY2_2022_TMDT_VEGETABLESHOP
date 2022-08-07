import { TestBed } from '@angular/core/testing';

import { HandleJsonService } from './handlejson.service';

describe('HandleJsonService', <T>() =>{
  let service: HandleJsonService<T>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HandleJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
