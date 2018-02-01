import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app works!';
  // loadingFeature: string;

  // onFeatureSelected(feature: string){
  //   this.loadingFeature = feature;
  // }

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyBc6fXXiUNcBOecth1NABYRpFyClKQV-Q4",
      authDomain: "mean-app-recipe.firebaseapp.com"
    });
  }

}
