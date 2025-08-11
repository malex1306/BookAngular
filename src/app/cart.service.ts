import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, defer, tap } from 'rxjs';
import { Cart } from './cart';
import { APP_SETTINGS } from './app.settings';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private _cart = new BehaviorSubject<Cart | undefined>(undefined);
  cart$ = this._cart.asObservable();

  private cartUrl = `${inject(APP_SETTINGS).apiUrl}/carts`;

  constructor(private http: HttpClient) {}

  get cart(): Cart | undefined {
    return this._cart.value;
  }

  set cart(cart: Cart | undefined) {
    this._cart.next(cart);
  }

  // Produkt zum Warenkorb hinzufügen
  addProduct(id: number): Observable<Cart> {
    const cartProduct = { productId: id, quantity: 1 };

    return defer(() =>
      !this.cart
        ? this.http.post<Cart>(this.cartUrl, { products: [cartProduct] })
        : this.http.put<Cart>(`${this.cartUrl}/${this.cart!.id}`, {
            products: [...this.cart.products, cartProduct]
          })
    ).pipe(
      tap(cart => this.cart = cart)
    );
  }

  // Warenkorb laden
  loadCart(): Observable<Cart> {
    return this.http.get<Cart>(this.cartUrl).pipe(
      tap(cart => this.cart = cart)
    );
  }
}
