import { Recipe } from './../classes/recipe';
import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class RecipeBuilderService {


 
  private messageSource = new BehaviorSubject<string>('default message');
  currentMessage = this.messageSource.asObservable();

  private recipeNameSource = new BehaviorSubject<string>('default recipeName');
  currentRecipeName = this.recipeNameSource.asObservable();

  private descriptionSource = new BehaviorSubject<string>('default description');
  currentDescription = this.descriptionSource.asObservable();

  private conculsionSource = new BehaviorSubject<string>('default conculsion');
  currentConculsion = this.conculsionSource.asObservable();






  constructor() { }
  // tslint:disable-next-line:max-line-length
  changeMessage(message: string, recipeName: string, description: string, conclusion: string) { // WILL NEED TO CHANGE ALL THE RECIPE INFORMATION
    this.messageSource.next(message);
    this.recipeNameSource.next(recipeName);
    this.descriptionSource.next(description);
    this.conculsionSource.next(conclusion);
  }
}
