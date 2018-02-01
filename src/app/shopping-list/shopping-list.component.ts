import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})

export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] ;
  subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.subscription = this.shoppingListService.ingredientAdded.subscribe(
      (ingItems: Ingredient[]) => {
        this.ingredients = ingItems;
      }
    );
  }

  onItemSelect(index: number){
      this.shoppingListService.startedEditing.next(index);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
