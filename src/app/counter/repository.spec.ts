import {TestBed} from '@angular/core/testing';

import {CounterRepository} from './counter.repository';

describe('CounterService', () => {
  let service: CounterRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CounterRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
