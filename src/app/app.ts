import { Component, signal, inject, Signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktList } from "./produkt-list/produkt-list";
import { Copyright } from './copyright';
import { APP_SETTINGS} from './app.settings';
import { from, Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger.component/key-logger.component';
import { AuthComponent } from './auth.component/auth.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktList, Copyright, KeyLoggerComponent, AuthComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})

export class App {
  settings = inject(APP_SETTINGS);
}

