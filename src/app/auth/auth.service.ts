import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    token: string;

    constructor(private router: Router){}

    signupUser(email:string, pswrd: string){
        firebase.auth().createUserWithEmailAndPassword(email,pswrd)
            .catch(
                err => console.log(err)    
            )
    }

    signinUser(email:string, pswrd: string){
        firebase.auth().signInWithEmailAndPassword(email,pswrd)
            .then(
                response => {
                    firebase.auth().currentUser.getToken()
                    .then(
                        (token:string) => this.token = token
                    )
                    this.router.navigate(['/']);
                }
            )
            .catch(
                err => console.log(err)    
            )
    }

    getAuthToken(){
        firebase.auth().currentUser.getToken()
        .then(
            (token:string) => this.token = token
        );
        return this.token;
    }

    performLogoutAction(){
        firebase.auth().signOut();
        this.token = null;
    }

    isUserAuthenticated(){
        return this.token != null;
    }
}