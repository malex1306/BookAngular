import { Component, inject } from '@angular/core';
import { Product } from '../product';
import { SortPipe } from '../sort-pipe';
import { ProductsService } from '../products.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { Observable, switchMap, of} from 'rxjs';


@Component({
  selector: 'app-produkt-list',
  imports: [SortPipe, RouterLink],
  templateUrl: './produkt-list.html',
  styleUrl: './produkt-list.css',
})
export class ProduktList  {
  selectedProduct: Product | undefined;
  private route = inject(ActivatedRoute);
 

  // ✅ Signal used in template with products()
  products = toSignal(
    this.route.data.pipe(
      switchMap(data => of(data['products'] as Product[]))
    ),
    { initialValue: [] }
  );

  onAdded(product: Product) {
    alert(`${this.selectedProduct?.title} added to the cart`);
  }

}
