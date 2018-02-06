import { NgModule } from "@angular/core";
import { Routes, RouterModule,PreloadAllModules } from "@angular/router";
import { ShoppingListComponent } from "app/shopping-list/shopping-list.component";
import { HomeComponent } from "app/home/home.component";

const APP_ROUTES : Routes = [
    { path: '', component: HomeComponent },
    { path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule' },
    { path: 'shopping-list', component: ShoppingListComponent }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [ RouterModule ]
})    
export class AppRoutingModule {

}
