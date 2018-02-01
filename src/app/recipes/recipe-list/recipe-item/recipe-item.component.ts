import { Component, Input } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeService } from 'app/recipes/recipes.service';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent  {

  @Input('recipeItem') recipeItem : Recipe;
  @Input('index') index;

}
