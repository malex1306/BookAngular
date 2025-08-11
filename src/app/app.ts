import { Component, signal, inject, Signal, computed } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ProduktList } from "./produkt-list/produkt-list";
import { Copyright } from './copyright';
import { APP_SETTINGS} from './app.settings';
import { from, Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger.component/key-logger.component';
import { AuthComponent } from './auth.component/auth.component';
import { MatToolbarRow, MatToolbar } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatBadge } from '@angular/material/badge';
import { CartService } from './cart.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Copyright, AuthComponent, RouterLink, MatToolbarRow, MatToolbar, MatButton, MatBadge],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  settings = inject(APP_SETTINGS);
  cartService = inject(CartService);
}

