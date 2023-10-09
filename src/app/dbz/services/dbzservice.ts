import { Injectable } from '@angular/core';
import{v4 as uuid } from 'uuid'; //npm i uuid en terminal.Crear Id único
import { Character } from '../interfaces/character.interface';


@Injectable({
  providedIn: 'root'
})
export class dbzService {
  public characters:Character[]=[{
    id:uuid(),
    name:'Krillin',
    power:1000
  },
  {
    id:uuid(),
    name:'Goku',
    power:9500
  },
  {
    id:uuid(),
    name:'Vegeta',
    power:3500
  }
  ];





  //Estos métodos hacen la accion de añadir o borrar
  //una vez los personajes han sido seleccionados en la lista
  addCharacter(character:Character):void{
      const newCharacter:Character= {id:uuid(),... character};//Propiedad spread(?)
      this.characters.push(newCharacter);

  }

 // onDeleteCharacter(index:number):void{
   // this.characters.splice(index,1);
  //}

deleteCharacterById(id:string){
  this.characters=this.characters.filter ( character => character.id !=id);
}

}
