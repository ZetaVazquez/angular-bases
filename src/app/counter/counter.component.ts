import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

<h3>Counter: {{counter}}</h3>

<button (click)="increaseBy(1)">+1</button>
<button (click)="decrementBy(1)">-1</button>
<button (click)="reset(10)">reset</button>

  `

})


export class CounterComponent{
   constructor(){}

   public counter: number= 10;

   increaseBy(value:number):void{
   this.counter+=value
   }

   decrementBy(value:number):void{
   this.counter-=value;
   }
   reset(value:number):void{
   this.counter=10;
   }
}
