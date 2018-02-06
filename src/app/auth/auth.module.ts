import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { SignupComponent } from "app/auth/signup/signup.component";
import { SigninComponent } from "app/auth/signin/signin.component";
import { AuthRoutingModule } from "app/auth/auth-routing.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[    
        SignupComponent,
        SigninComponent
    ],
    imports:[
        FormsModule,
        CommonModule,
        AuthRoutingModule
    ]
})
export class AuthModule{

}