import { Component, OnInit, inject} from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-produkt-list',
  imports: [ProductDetail, SortPipe],
  templateUrl: './produkt-list.html',
  styleUrl: './produkt-list.css',
  providers: [ProductsService]
})
export class ProduktList implements OnInit {
   products: Product[] = [];
   selectedProduct : Product | undefined;
   private productService = inject(ProductsService);

 

   onAdded(product: Product) {
    alert(`${product.title} added to the cart`)
  }
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
