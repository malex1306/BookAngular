import { Component, OnInit, Host, Optional } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';;
import { favoritesFactory } from '../favorites';


@Component({
  selector: 'app-favorites',
  imports: [],
  templateUrl: './favorites.html',
  styleUrl: './favorites.css',
  providers: [ {provide: ProductsService, useFactory: favoritesFactory(true) }]
})
export class Favorites {

  products: Product[] = [];

  constructor(@Optional() @Host()private productsService: ProductsService) {}

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }
}
