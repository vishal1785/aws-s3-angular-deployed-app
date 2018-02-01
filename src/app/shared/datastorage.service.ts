import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Recipe } from "app/recipes/recipe.model";
import { Response } from "@angular/http";
import { RecipeService } from "app/recipes/recipes.service";
import 'rxjs/Rx';
import { Ingredient } from "app/shared/ingredient.model";
import { ShoppingListService } from "app/shopping-list/shopping-list.service";
import { AuthService } from "app/auth/auth.service";

@Injectable()
export class DataStorageService{
    
    dbURL : string = "https://mean-app-recipe.firebaseio.com/";
    recipeEndPoint :string = "recipes.json";
    shopListEndPoint :string = "shop-list-items.json";
    constructor(private http : Http,
                private recipeService: RecipeService,
                private shopListService: ShoppingListService,
                private authservice: AuthService) { }

    saveRecipesToDB(recipes: Recipe[]){
        return this.http.put(`${this.dbURL}${this.recipeEndPoint}`,recipes);
    }

    saveIngredientsToDB(ingredients: Ingredient[]){
        return this.http.put(`${this.dbURL}${this.shopListEndPoint}`,ingredients);
    }

    getRecipesFromDB(){
        const token = this.authservice.getAuthToken();
        this.http.get(`${this.dbURL}${this.recipeEndPoint}?auth=${token}`)
                .map(
                    (response: Response) => {
                        const recipes: Recipe[] = response.json();
                        for(let recipe of recipes){
                            if(!recipe['ingredients']){
                                recipe['ingredients'] = []; // add empty ing to recipe item if its deletd on the firebase db
                            }
                        }
                        return recipes;
                })
                .subscribe(
                    (recipes: Recipe[]) => {
                      this.recipeService.setRecipes(recipes);
                });
    }

    getIngredientsFromDB(){
        const token = this.authservice.getAuthToken();
        this.http.get(`${this.dbURL}${this.shopListEndPoint}?auth=${token}`)
                .map(
                    (response: Response) => {
                        const ingredients: Ingredient[] = response.json();
                        return ingredients;
                })
                .subscribe(
                    (ingredients: Ingredient[]) => {
                        this.shopListService.setIngredients(ingredients);
                });
    }
}