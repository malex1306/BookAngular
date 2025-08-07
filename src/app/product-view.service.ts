import { Injectable } from '@angular/core';
import { ProductsService } from './products.service';
import { Product } from './product';
import { Observable, map } from 'rxjs';

@Injectable()
export class ProductViewService {
  constructor(private productService: ProductsService) {}

  getProduct(id: number): Observable<Product | undefined> {
    return this.productService.getProducts().pipe(
      map((products: Product[]) =>
        products.find((product: Product) => product.id === id)
      )
    );
  }
}
