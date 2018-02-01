import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { RecipesComponent } from "app/recipes/recipes.component";
import { RecipeDetailComponent } from "app/recipes/recipe-detail/recipe-detail.component";
import { RecipeStartComponent } from "app/recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "app/recipes/recipe-edit/recipe-edit.component";
import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { Authguard } from "app/auth/auth-guard.service";

const ROUTES : Routes = [
    { path: '', redirectTo:'/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, children: [
        { path: '', component: RecipeStartComponent },
        { path: 'new', component: RecipeEditComponent, canActivate:[Authguard] },
        { path: ':id', component: RecipeDetailComponent },
        { path: ':id/edit', component: RecipeEditComponent, canActivate:[Authguard] }
    ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(ROUTES) ],
    exports: [ RouterModule ]
})    
export class AppRoutingModule {

}