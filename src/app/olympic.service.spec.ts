import { TestBed } from '@angular/core/testing';

import { OlympicService } from './olympic.service';

describe('OlympicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OlympicService = TestBed.get(OlympicService);
    expect(service).toBeTruthy();
  });
});
