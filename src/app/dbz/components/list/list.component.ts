import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { Input } from '@angular/core';
import{v4 as uuid } from 'uuid';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()//Para sacar propertys de un "mundo" a otro "mundo"
  public characterList: Character[]=[{
    name:'Trunk',
    power:10
  }]

///////////////////////////////////////
/*Para borrar el prsonaje creo un método y un evento que se encarge de
llamar al método. Este evento es el que utilizo en main page para poder ser llamado/utilizado
por dicho main-page (todo desde dbz-ervices.ts). Tiene accion directa con la lista, y no con el personaje*/

  onDeleteCharacter(id?:string):void{
    //Emitir ID.
    this.onDelete.emit(id)
    if(!id)return; //si no hay id no se devuelve nada

  }

  @Output()
  onDelete:EventEmitter<string>=new EventEmitter();
}


