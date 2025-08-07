import { CurrencyPipe, AsyncPipe } from '@angular/common';
import { Component,input, output, OnChanges} from '@angular/core';
import { Product } from '../product';
import { Observable } from 'rxjs';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-product-detail',
  imports: [ CurrencyPipe, AsyncPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail  {
  product$: Observable<Product> | undefined;
  added = output<Product>();
  id = input<number>();
  deleted = output();


// get productTitle(){
//   return this.product()!.title;
// }

constructor(private productService: ProductsService){}

ngOnChanges(): void {
  this.product$ = this.productService.getProduct(this.id()!);
}


addToCart(product: Product){
  this.added.emit(product);
}
changePrice(product: Product, price: string){
  this.productService.updateProduct(product.id, Number(price)).subscribe();
}

remove(product: Product) {
  this.productService.deleteProduct(product.id).subscribe(() => {
    this.deleted.emit();
  })
}
}



