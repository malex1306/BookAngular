import { Component,input, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { Observable, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';
import { MatButton, MatIconButton } from '@angular/material/button';
import { MatInput } from '@angular/material/input';
import { MatFormField, MatError, MatSuffix } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatChipSet, MatChip } from '@angular/material/chips';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, FormsModule, MatButton, MatInput, MatFormField, MatError, MatIcon, MatSuffix, MatIconButton, MatChip, MatChipSet, MatSnackBarModule],
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

constructor(private productService: ProductsService, public authService: AuthService, private route: ActivatedRoute, private router: Router, private cartService: CartService,
  private snackbar: MatSnackBar
){}

addToCart(id: number){
  this.cartService.addProduct(id).subscribe(() => {
    this.snackbar.open('Product added to cart!', undefined, {
      duration: 1000
    })
  });
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



