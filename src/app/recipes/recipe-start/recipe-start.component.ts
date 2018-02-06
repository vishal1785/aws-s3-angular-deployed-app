import { Component } from '@angular/core';
import { DataStorageService } from 'app/shared/datastorage.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.css']
})

export class RecipeStartComponent implements OnInit{

  constructor(private dataStorageService: DataStorageService,
              private authService: AuthService){}

  ngOnInit(){
    if(this.authService.isUserAuthenticated())
    this.dataStorageService.getRecipesFromDB();
    this.dataStorageService.getIngredientsFromDB();
  }
}
