import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})


export class CharacterComponent {

  @Output()
  public onNew: EventEmitter<Character> = new EventEmitter();




  public character: Character ={
    name:'',
    power:0
  };


  emitCharacter():void{
    console.log(this.character);
    if ( this.character.name.length===0) return; //Si el valor de nombre es un nº entonces devuelve 0.

    this.onNew.emit(this.character);

    /*this.character.name='';
    this.character.power=0;*/
    this.character={ name:'',power:0}
  }
}
