import { Routes } from '@angular/router';
import { ProduktList } from './produkt-list/produkt-list';
import { CartComponent } from './cart.component/cart.component';

export const routes: Routes = [
    {path: 'products', component: ProduktList},
    { path: 'cart', component: CartComponent}
];
