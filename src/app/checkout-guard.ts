import { CanDeactivateFn } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { inject } from '@angular/core';
import { CartService } from './cart.service';
import { Checkout } from './checkout/checkout';

export const checkoutGuard: CanDeactivateFn<unknown> = () => {
  const dialog = inject(MatDialog);
  const cartService = inject(CartService);

  if (cartService.cart) {
    return dialog.open(Checkout).afterClosed(); // Observable<boolean>
  }

  return true;
};
