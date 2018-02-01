import { Ingredient } from "app/shared/ingredient.model";
import { Subject } from "rxjs/Subject";

export class ShoppingListService {

    ingredientAdded = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();

    private ingredients: Ingredient[] =[
        //new Ingredient('Apples',5),
        //new Ingredient('Tomatoes',10)
    ];

    getIngredients(){
         return this.ingredients.slice();
    }

    setIngredients(ingredients: Ingredient[]){
        this.ingredients = ingredients;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    getIngredientByIndex(index: number){
        return this.ingredients[index];
    }

    removeIngredient(index: number){
        this.ingredients.splice(index,1);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    updateIngredient(index: number, ingItem: Ingredient){
        this.ingredients[index] = ingItem;
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredients(ing: Ingredient){
        this.ingredients.push(ing);
        this.ingredientAdded.next(this.ingredients.slice());
    }

    addIngredientsToList(ingItem : Ingredient[]){
        this.ingredients.push(...ingItem);
        this.ingredientAdded.next(this.ingredients.slice());
    }
}