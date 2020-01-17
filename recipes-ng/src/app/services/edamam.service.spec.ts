import { TestBed } from '@angular/core/testing';

import { EdamamService } from './edamam.service';

describe('EdamamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EdamamService = TestBed.get(EdamamService);
    expect(service).toBeTruthy();
  });
});
