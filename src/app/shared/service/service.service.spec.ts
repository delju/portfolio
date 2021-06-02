/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SerService } from './service.service';

describe('Service: Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SerService]
    });
  });

  it('should ...', inject([SerService], (service: SerService) => {
    expect(service).toBeTruthy();
  }));
});
