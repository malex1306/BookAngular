import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductCreateComponent } from '../product-create.component/product-create.component';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-produkt-list',
  imports: [ProductDetail, SortPipe, ProductCreateComponent, AsyncPipe],
  templateUrl: './produkt-list.html',
  styleUrl: './produkt-list.css'
})
export class ProduktList  {
  selectedProduct: Product | undefined;
  products = toSignal(inject(ProductsService).getProducts(), {
    initialValue: []
  });

  onAdded(product: Product) {
    alert(`${this.selectedProduct?.title} added to the cart`);
  }

}
