import { Injectable } from '@angular/core';
import { Recipe } from "app/recipes/recipe.model";
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes : Recipe[] = [
       /* new Recipe("Ratatoiulle","A mouse chef favourite dish",
        "https://www.traegergrills.com/on/demandware.static/-/Library-Sites-TraegerSharedLibrary/default/dw2e9a03f1/images/recipes/20170803_Smoked-Ratatouille_RE_HE_M.jpg", 
        [
            new Ingredient('Capsicum',10),
            new Ingredient('Brocolli',15)
        ]),
        new Recipe("Schnitzel ","A schnitzel is meat dish",
        "https://assets.bonappetit.com/photos/57ae1afd53e63daf11a4e26f/16:9/w_1000,c_limit/chicken-schnitzel.jpg",
        [
            new Ingredient('Red Meat',5),
            new Ingredient('French Fries',20)
        ])*/
    ];
    
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