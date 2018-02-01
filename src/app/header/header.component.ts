import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataStorageService } from 'app/shared/datastorage.service';
import { RecipeService } from 'app/recipes/recipes.service';
import { Response } from '@angular/http/';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(private dataStorageService: DataStorageService,
              private recipeService: RecipeService,
              private shopListService: ShoppingListService,
              private authservice: AuthService){}

  onSaveData(){
      this.dataStorageService.saveRecipesToDB(this.recipeService.getRecipes())
          .subscribe(
            (response: Response) => {
              //console.log(response);
            }
          );

      this.dataStorageService.saveIngredientsToDB(this.shopListService.getIngredients())
          .subscribe(
            (response: Response) => {
              //console.log(response);
            }
          );          
  }

  onFetchData(){
    this.dataStorageService.getRecipesFromDB();
    this.dataStorageService.getIngredientsFromDB();
  }

  onLogout(){
    this.authservice.performLogoutAction();
  }

}
