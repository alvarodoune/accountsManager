import { Component } from '@angular/core';

import { Camera } from "@ionic-native/camera";
import { MediaCapture, MediaFile, CaptureError, CaptureVideoOptions } from "@ionic-native/media-capture";
import { LoadingController, AlertController, IonicPage, NavController } from 'ionic-angular';
import { AuthService } from "../../services/auth";
import { LoginPage } from "../login-page/login-page";

import 'whatwg-fetch';

//region firebase imports
import * as firebase from 'firebase';

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
            private loadingController: LoadingController,
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
            }).catch((error: any) => {
                  console.log(error);
            });
      }

      protected picPhoto() {
            let loading = this.loadingController.create({
                        content: "loading..."
            });
            this.camera.getPicture({
                  quality: 75,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                  mediaType: this.camera.MediaType.PICTURE,
                  destinationType: this.camera.DestinationType.FILE_URI,
                  correctOrientation: true,
                  targetWidth: 100,
                  targetHeight: 100
            }).then(imageUrl => {
                  this.imageURL = imageUrl;
                  loading.present();
                  return this.makeFileIntoBlob(imageUrl);
            }).then((imageBlob: Blob) => {
                  var metadata = {
                        contentType: 'image/jpeg'
                  };

                  let storageRef = firebase.storage().ref("icons/" + firebase.auth().currentUser.uid);

                  let task = storageRef.put(imageBlob, metadata);

                  task.on("state_changed", (snapshot) => {
                        if (snapshot.bytesTransferred == snapshot.totalBytes) {
                              console.log("COMPLETE file upload! ");
                              loading.dismiss();
                        }
                  });
            }).catch((error: any) => {
                  console.log("GET PICTURE ERROR: " + error);
                  loading.dismiss();
            });
      }

      makeFileIntoBlob(imagePath: string) {
            return fetch(imagePath).then((response) => {
                  return response.blob();
            }).then((blob) => {
                  return blob;
            }).catch((error) => {
                  console.error("Error convertion to blob: " + error);
            });
      }
}
