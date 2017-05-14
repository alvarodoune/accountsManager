import { Component } from '@angular/core';

import { Camera } from "@ionic-native/camera";
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from "@ionic-native/media-capture";
import { ImagePicker } from '@ionic-native/image-picker';

import { AlertController, IonicPage, NavController } from 'ionic-angular';
import { AuthService } from "../../services/auth";
import { LoginPage } from "../login-page/login-page";

@IonicPage()
@Component({
      selector: 'page-home',
      templateUrl: 'home.html'
})
export class HomePage {
      protected imageURL: string = "";

      constructor(public navCtrl: NavController,
            private authService: AuthService,
            private camera: Camera,
            private alertCtrl: AlertController,
            private mediaCapture: MediaCapture,
            private imagePicker: ImagePicker) {

      }

      showConfirm() {
            let confirm = this.alertCtrl.create({
                  title: 'LogOut',
                  message: 'Esta seguro que desea salir?',
                  buttons: [
                        {
                              text: 'No',
                              handler: () => {
                                    //do nothing;
                              }
                        },
                        {
                              text: 'Si',
                              handler: () => {
                                    this.logOut();
                              }
                        }
                  ]
            });
            confirm.present();
      }

      logOut() {
            console.log("log out");
            this.authService.logOut();
            this.navCtrl.setRoot(LoginPage);
      }

      navigateToEdition() {
            this.navCtrl.push('RegisterUser', { imageURL: this.imageURL })
      }

      protected captureVideo() {
            let videoOptions: CaptureVideoOptions = { duration: 60 };
            this.mediaCapture.captureVideo(videoOptions).then(
                  (data: MediaFile[]) => console.log(data),
                  (err: CaptureError) => console.error(err)
            );
      }

      protected takePhoto() {
            this.camera.getPicture({
                  allowEdit: true,
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

      protected selectPhoto() {
            this.imagePicker.getPictures({ maximumImagesCount: 2 }).then((results) => {
                  for (var i = 0; i < results.length; i++) {
                        console.log('Image URI: ' + results[i]);
                        this.imageURL = results[0];
                  }
            }, (err) => { });
      }
}
