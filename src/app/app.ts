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
  protected  title: string = '';
  settings = inject(APP_SETTINGS);
  
  private setTitle = () =>{
    this.title = this.settings.title;
  }

  private changeTitle(callback : Function) {
    setTimeout(() => {
      callback();
    }, 2000);
  }

  constructor() {
    this.onComplete().then(this.setTitle);
  }
  private onComplete(){
    return new Promise<void>(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  }
}
