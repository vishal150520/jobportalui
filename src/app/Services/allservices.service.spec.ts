import { TestBed } from '@angular/core/testing';

import { IAllservicesService } from './allservices.service';

describe('AllservicesService', () => {
  let service: IAllservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IAllservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
