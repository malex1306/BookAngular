import { Routes } from '@angular/router';
import { ProduktList } from './produkt-list/produkt-list';
import { CartComponent } from './cart.component/cart.component';
import { ProductCreateComponent } from './product-create.component/product-create.component';
import { ProductDetail } from './product-detail/product-detail';
import { authGuard } from './auth-guard';
import { checkoutGuard } from './checkout-guard';
import { productsResolver } from './products-resolver';

export const routes: Routes = [
    { path: 'products', component: ProduktList, resolve: { products: productsResolver}},
    { path: 'cart', component: CartComponent, canActivate: [authGuard], canDeactivate: [() => confirm('You have pending items in your cart. Do you want to continue?')]},
    { path: 'products/new', component: ProductCreateComponent},
    { path: 'products/:id', component: ProductDetail},
    { path: '', redirectTo: 'products', pathMatch: 'full'},
    { path: '**', redirectTo: 'products'},
    { path: 'user', loadChildren: () => import('./user.routes'), canMatch: [authGuard]}
    
];
