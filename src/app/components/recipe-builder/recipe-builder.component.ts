import { RecipeBuilderService } from './../../services/recipe-builder.service';
import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../classes/recipe';

@Component({
  selector: 'app-recipe-builder',
  templateUrl: './recipe-builder.component.html',
  styleUrls: ['./recipe-builder.component.css']
})
export class RecipeBuilderComponent implements OnInit {
  recipeName: string;
  description: string;
  conculsion: string;
  recipe: Recipe;


  message: string;
  updateMessage: string;

  BuildRecipe() { // NOT USED FOR NOW, JUST TO SEE HOW THE BUILDER WORKING
    this.recipe =  new Recipe(this.recipeName, this.description , this.conculsion );
    alert('submit is working');
  }
  constructor(private data: RecipeBuilderService) { }

  ngOnInit() {

  }

  newMessage() { // Moving all the information to the view via Service
    this.data.changeMessage(this.updateMessage, this.recipeName, this.description, this.conculsion);
  }

}
