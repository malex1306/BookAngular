import { CurrencyPipe, KeyValuePipe, LowerCasePipe } from '@angular/common';
import { Component,input, output} from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  imports: [KeyValuePipe, CurrencyPipe, LowerCasePipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail  {
  product = input<Product>();
  added = output<Product>();

get productTitle(){
  return this.product()!.title;
}




addToCart(){
  this.added.emit(this.product()!);
}
}



