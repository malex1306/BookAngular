import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktList } from "./produkt-list/produkt-list";
import { Copyright } from './copyright';
import { APP_SETTINGS, appSettings} from './app.settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktList, Copyright],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class App {
  protected readonly title = signal('learnAsp');
  settings = inject(APP_SETTINGS);
}
