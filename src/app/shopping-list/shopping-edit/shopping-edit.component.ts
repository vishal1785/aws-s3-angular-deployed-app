import { Component, OnInit,OnDestroy,ViewChild } from '@angular/core';
import { Ingredient } from 'app/shared/ingredient.model';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  @ViewChild('f') shopForm;
  ingItem: Ingredient;
  subscription: Subscription;
  editedItem: Ingredient;
  editMode: boolean;
  editedItemIndex: number;

  constructor(private shoppingListService: ShoppingListService ) { }

  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) =>{
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredientByIndex(index);
          this.shopForm.setValue({
            itemName: this.editedItem.name,
            itemAmount: this.editedItem.amount,
          })
      }
    );
  }

  /*onAddIng(nameInput: HTMLInputElement, amtInput: HTMLInputElement) {
    this.shoppingListService.ingredientAdded.next(new Ingredient( nameInput.value, Number(amtInput.value)));
  }*/

  onAddUpdateItem(form : NgForm){
    const formData = form.value;
    const newIngredient = new Ingredient( formData.itemName, Number(formData.itemAmount));
    if(this.editMode){
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else{
      this.shoppingListService.addIngredients(newIngredient);
    }
    //this.editMode = false;
    //form.reset();
    this.resetForm();
  }

  onClearIng(){
    // this.shopForm.reset();
    // this.editMode = false;
    this.resetForm();
  }

  onDeleteIng(){
    this.shoppingListService.removeIngredient(this.editedItemIndex);
    this.resetForm();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  resetForm(){
    this.shopForm.reset();
    this.editMode = false;
  }
}
