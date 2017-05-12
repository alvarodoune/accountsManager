import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {AuthService} from "../../services/auth";
import {LoginPage} from "../login-page/login-page";
import {Camera} from "@ionic-native/camera";
import {RegisterUser} from "../register-user/register-user";

@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage {
      protected imageURL: string = "";

      constructor(public navCtrl: NavController, private authService: AuthService, private Camera: Camera) {

      }

      logOut() {
            console.log("log out");
            this.authService.logOut();
            this.navCtrl.setRoot(LoginPage);
      }

      navigateToEdition() {
            this.navCtrl.push('RegisterUser', {imageURL: this.imageURL})
      }

      takePhoto() {
            this.Camera.getPicture({
                  //allowEdit: true,
                  saveToPhotoAlbum: true,
                  //correctOrientation: true
            }).then(imageData => {
                  console.log(imageData);
                  this.imageURL = imageData;
            })
                .catch((error: any) => {
                      console.log(error);
                });
      }
}
