import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Feature Modules
import { AuthModule } from 'app/auth/auth.module';
import { ShoppingListModule } from 'app/shopping-list/shopping-list.module';

// Routing Module
import { AppRoutingModule } from 'app/app-routing.module';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// Services
import { RecipeService } from 'app/recipes/recipes.service';
import { ShoppingListService } from 'app/shopping-list/shopping-list.service';
import { DataStorageService } from 'app/shared/datastorage.service';
import { AuthService } from './auth/auth.service';
import { Authguard } from 'app/auth/auth-guard.service';
import { SharedModule } from 'app/shared/shared.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    AuthModule,
    SharedModule,
    ShoppingListModule
  ],
  providers: [ShoppingListService,RecipeService,DataStorageService,AuthService,Authguard],
  bootstrap: [AppComponent]
})
export class AppModule { }
