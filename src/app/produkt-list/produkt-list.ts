import { Component, AfterViewInit,viewChild} from '@angular/core';
import { Product } from '../product';
import { ProductDetail } from '../product-detail/product-detail';

@Component({
  selector: 'app-produkt-list',
  imports: [ProductDetail],
  templateUrl: './produkt-list.html',
  styleUrl: './produkt-list.css',
})
export class ProduktList implements AfterViewInit {
  products: Product[] = [
    {id: 1, title: 'Keyboard', price: 100, categories:{ 1: 'Computing', 2: 'Peripherals'}},
    {id: 2, title: 'Microphone', price: 35, categories:{ 3: 'Multimedia'}},
    {id: 3, title: 'Web camera', price: 79, categories:{1: 'Computing', 3: 'Multimedia'}},
    {id: 4, title: 'Tablet', price: 500, categories:{ 4: 'Entertaiment'}}
  ];
  selectedProduct : Product | undefined = this.products[0];
  productDetail = viewChild(ProductDetail)
  
  ngAfterViewInit(): void {
    console.log(this.productDetail()!.product);
  }

  onAdded(product: Product) {
    alert(`${product.title} added to the cart`)
  }

}
