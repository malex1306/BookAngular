import { CanDeactivateFn } from '@angular/router';
import { CartComponent } from './cart.component/cart.component';

export const checkoutGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  return true;
};
