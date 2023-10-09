import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HeroesModule } from './heroes/heroes.module';


import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { DbzModule } from './dbz/dbz.module';


//import { HeroComponent } from './heroes/hero/hero.component';
//import { ListComponent } from './heroes/hero/list/list.component';



@NgModule({
  declarations: [
    AppComponent,CounterComponent//HeroComponent, ListComponent,
  ],
  imports: [
    BrowserModule,HeroesModule,DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
