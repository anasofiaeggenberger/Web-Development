import { TestBed } from '@angular/core/testing';

import { ProgrammingQuoteService } from './programming-quote.service';

describe('ProgrammingQuoteService', () => {
  let service: ProgrammingQuoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProgrammingQuoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
