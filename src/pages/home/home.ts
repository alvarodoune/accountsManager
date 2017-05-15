import { Component } from '@angular/core';

import { Camera } from "@ionic-native/camera";
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from "@ionic-native/media-capture";

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
      protected videoURL: string = "";
      protected videoName: string = "";

      constructor(public navCtrl: NavController,
            private authService: AuthService,
            private camera: Camera,
            private alertCtrl: AlertController,
            private mediaCapture: MediaCapture) {
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
            this.videoName = "";
            this.videoURL = "";
            let videoOptions: CaptureVideoOptions = { duration: 60 };
            this.mediaCapture.captureVideo(videoOptions).then(
                  (data: MediaFile[]) => {
                        console.log(data);
                        this.videoName = data[0].name;
                        this.videoURL = data[0].fullPath;
                        // data.forEach((value: MediaFile, index: number) => {
                        //       this.videoURL = data[index].fullPath;
                        // });
                  },
                  (err: CaptureError) => console.error(err)
            );
      }

      protected takePhoto() {
            this.camera.getPicture({
                  //allowEdit: true,
                  saveToPhotoAlbum: true,
                  correctOrientation: true,
                  cameraDirection: 1
            }).then(imageData => {
                  console.log(imageData);
                  this.imageURL = imageData;
            })
                  .catch((error: any) => {
                        console.log(error);
                  });
      }

      protected picVideo() {
            this.videoName = "";
            this.videoURL = "";
            this.camera.getPicture({
                  sourceType: 0,
                  mediaType: 1
            }).then(imageData => {
                  console.log(imageData);
                  this.videoURL = imageData;
            })
                  .catch((error: any) => {
                        console.log(error);
                  });
      }

      protected picPhoto() {
            this.camera.getPicture({
                  sourceType: 0,
                  mediaType: 0
            }).then(imageData => {
                  console.log(imageData);
                  this.imageURL = imageData;
            })
                  .catch((error: any) => {
                        console.log(error);
                  });
      }
}
