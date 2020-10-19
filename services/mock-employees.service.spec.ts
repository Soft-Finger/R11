import { TestBed } from '@angular/core/testing';

import { MockEmployeesService } from './mock-employees.service';

describe('MockEmployeesService', () => {
  let service: MockEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
