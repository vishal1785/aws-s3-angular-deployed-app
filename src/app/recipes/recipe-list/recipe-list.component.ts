import { Component, OnInit } from '@angular/core';
import { Recipe } from 'app/recipes/recipe.model';
import { RecipeService } from 'app/recipes/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from 'app/shared/datastorage.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[];
  subscription: Subscription;

  constructor(private recipesService : RecipeService,
              private dataService: DataStorageService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.recipesService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
          this.recipes = recipes;      
      }
    );
    this.recipes = this.recipesService.getRecipes();
    //this.dataService.getRecipesFromDB();
  }

  onAddNewRecipe(){
    this.router.navigate(['new'], {'relativeTo':this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
