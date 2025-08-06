import { TestBed } from '@angular/core/testing';

import { ProductView } from './product-view';

describe('ProductView', () => {
  let service: ProductView;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductView);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
