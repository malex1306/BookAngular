import { Component, signal, inject, Signal, computed } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProduktList } from "./produkt-list/produkt-list";
import { Copyright } from './copyright';
import { APP_SETTINGS, appSettings} from './app.settings';
import { from, Observable } from 'rxjs';
import { KeyLoggerComponent } from './key-logger.component/key-logger.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProduktList, Copyright, KeyLoggerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers: [
    { provide: APP_SETTINGS, useValue: appSettings }
  ]
})
export class App {
  title: Signal<string> = signal('');
  settings = inject(APP_SETTINGS);
  currentDate = signal(new Date());
  
  private setTitle = () =>{
    this.currentDate.set(new Date());
  }

  private changeTitle(callback : Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }
    private onComplete(){
    return new Promise<void>(resolve => {
      setInterval(() => {
        resolve();
      }, 2000);
    });
  }

  constructor() {
    this.title$.subscribe(this.setTitle);
    this.title = computed(() => {
      return `${this.settings.title} (${this.currentDate})`
    })
    const complete$ = from(this.onComplete())
    complete$.subscribe(this.setTitle);
  }
  

  title$ = new Observable<void>(observer => {
    setInterval(()=> {
      observer.next();
    }, 1000);
  })
}
