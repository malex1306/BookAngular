import { TestBed } from '@angular/core/testing';

import { Favorites } from './favorites';

describe('Favorites', () => {
  let service: Favorites;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Favorites);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
