import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AuthService } from "../../services/auth";
import {LoginPage} from "../login-page/login-page";

@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage {
      protected isLogedIn: boolean = false;

      constructor(public navCtrl: NavController, private authService: AuthService) {

      }

      logOut(){
            console.log("log out");
            this.authService.logOut();
            this.navCtrl.setRoot(LoginPage);
      }
}
