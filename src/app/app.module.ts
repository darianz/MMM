import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeViewComponent } from './components/recipe-view/recipe-view.component';
import { RecipeBuilderComponent } from './components/recipe-builder/recipe-builder.component';
import { RecipeBuilderService } from './services/recipe-builder.service';



@NgModule({
  declarations: [
    AppComponent,
    RecipeViewComponent,
    RecipeBuilderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],

  bootstrap: [AppComponent],

  providers: [RecipeBuilderService]
})
export class AppModule { }
