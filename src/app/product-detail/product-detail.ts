import { Component,input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
  product$: Observable<Product> | undefined;
  id = input<string>();
  price: number | undefined;
  

  ngOnInit(): void {
    this.product$ = this.productService.getProduct(Number(this.id()!));
  }


// get productTitle(){
//   return this.product()!.title;
// }

constructor(private productService: ProductsService, public authService: AuthService, private route: ActivatedRoute, private router: Router, private cartService: CartService){}

addToCart(id: number){
  this.cartService.addProduct(id).subscribe();
}
changePrice(product: Product){
  this.productService.updateProduct(product.id, this.price!).subscribe(() =>
  this.router.navigate(['/products']));
}

remove(product: Product) {
  this.productService.deleteProduct(product.id).subscribe(() => {
    this.router.navigate(['/products']);
  })
}
}



