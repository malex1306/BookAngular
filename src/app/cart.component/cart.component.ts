import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../product';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartForm = new FormGroup({
    products: new FormArray<FormControl<number>>([])
  });
  products: Product[] = [];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    // Immer wenn sich der Warenkorb ändert, Produkte laden & Formular bauen
    this.cartService.cart$.subscribe(cart => {
      if (cart && cart.products.length > 0) {
        this.loadProducts(cart.products.map(p => p.productId));
      } else {
        this.products = [];
        this.clearForm();
      }
    });

    // Initial Warenkorb laden
    this.cartService.loadCart().subscribe();
  }

  private loadProducts(productIds: number[]) {
    this.productsService.getProducts().subscribe(allProducts => {
      this.products = allProducts.filter(p => productIds.includes(p.id));
      this.buildForm();
    });
  }

  private buildForm() {
    const productsFormArray = this.cartForm.controls.products as FormArray;
    productsFormArray.clear();

    this.products.forEach(() => {
      productsFormArray.push(new FormControl(1, { nonNullable: true }));
    });
  }

  private clearForm() {
    const productsFormArray = this.cartForm.controls.products as FormArray;
    productsFormArray.clear();
  }
}
