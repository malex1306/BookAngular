import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktList } from "./produkt-list/produkt-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('learnAsp');
}
