import { Component, OnInit } from '@angular/core';
import { RecipeBuilderService } from './../../services/recipe-builder.service';
@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css']
})
export class RecipeViewComponent implements OnInit {
  _headline = 'headline check'; // headline of the recipe
  _description = 'description check'; // Description by user
  _informativeInformation; // how long gonna take complexity etc..
  _conclusion = 'conclusion check'; // Conclusion by user
  _stagesArray = [];
  _milestones = [];
  _coverImage;
  _image1;
  _image2;
  _videoLink;
  message: string;



  constructor(private data: RecipeBuilderService ) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message);
    this.data.currentRecipeName.subscribe(_headline => this._headline = _headline);
    this.data.currentDescription.subscribe(_description => this._description = _description);
    this.data.currentConculsion.subscribe(_conclusion => this._conclusion = _conclusion);
  }

}
