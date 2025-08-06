import { Component, signal, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktList } from "./produkt-list/produkt-list";
import { Copyright } from './copyright';
import { APP_SETTINGS, appSettings} from './app.settings';
import { Observable } from 'rxjs';

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
  protected  title: string = '';
  settings = inject(APP_SETTINGS);
  
  private setTitle = () =>{
    const timestamp = new Date();
    this.title = `${this.settings.title} (${timestamp})`;
  }

  private changeTitle(callback : Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  constructor() {
    this.title$.subscribe(this.setTitle);
  }
  

  title$ = new Observable<void>(observer => {
    setInterval(()=> {
      observer.next();
    }, 1000);
  })
}
