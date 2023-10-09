import { Component, Output } from '@angular/core';
import { dbzService } from '../services/dbzservice';
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-pages.component.html'
})

export class MainPageComponent{

  constructor(private dbzService: dbzService){}

  get characters():Character[]{
    return [...this.dbzService.characters];
  }

  //Recibe el ID
  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id); //Y elimina el personaje por ID
  }

  onNewCharacter(character:Character):void{
    this.dbzService.addCharacter(character); //añade personaje
  }
}
