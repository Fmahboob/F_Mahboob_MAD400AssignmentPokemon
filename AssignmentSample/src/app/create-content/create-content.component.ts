import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {

  @Output() newPokemonEvent: EventEmitter<Content> = new EventEmitter<Content>();
  newPokemon?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addPokemon(id: string, title: string, description: string, creator: string, imageUrl: string, type: string, tags: string): void{
    this.newPokemon = {
      id: parseInt(id),
      title: title,
      description: description,
      creator: creator,
      imgURL: imageUrl, 
      type: type,
      tags: tags.split(",")

    };
    this.newPokemonEvent.emit(this.newPokemon)
  }


}