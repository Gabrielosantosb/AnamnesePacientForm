import { TestBed } from '@angular/core/testing';

import { AnotationService } from './anotation.service';

describe('ReportService', () => {
  let service: AnotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
