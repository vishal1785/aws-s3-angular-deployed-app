import { Injectable } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [ ];
    
    constructor(private shopListService : ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipeById(index: number){
        return this.recipes.slice()[index];
    }

    addRecipeToShopList(recipeIngredients : Ingredient[]){
        this.shopListService.addIngredientsToList(recipeIngredients);
    }

    addRecipe(newRecipe: Recipe){
        this.recipes.push(newRecipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, updatedRecipe: Recipe){
        this.recipes[index] = updatedRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipesChanged.next(this.recipes.slice());
    }
}