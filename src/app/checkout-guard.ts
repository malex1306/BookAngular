import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from './cart.component/cart.component';

export const checkoutGuard: CartComponent = () => {
 const confirmation = confirm(
  'You have pending items in your cart. Do you want to continue?'
 );
 return confirmation
};
