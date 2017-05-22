import { AuthService } from '../../services/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import 'whatwg-fetch';

@IonicPage()
@Component({
      selector: 'page-add-account',
      templateUrl: 'add-account.html',
})
export class AddAccount {
      iconURL: string;
      downloadUrl: string;

      constructor(
            private auth: AuthService,
            private navCtrl: NavController,
            private navParams: NavParams,
            private camera: Camera) {
      }

      ionViewDidLoad() {
            console.log('ionViewDidLoad AddAccount');
      }

      picIcon() {
            this.camera.getPicture({
                  quality: 75,
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                  mediaType: this.camera.MediaType.PICTURE,
                  destinationType: this.camera.DestinationType.FILE_URI,
                  correctOrientation: true,
                  targetWidth: 100,
                  targetHeight: 100
            }).then(imagePath => {
                  console.log(imagePath);
                  this.iconURL = imagePath;
            }).catch((error: any) => {
                  console.log("GET PICTURE ERROR: " + error);
            });
      }

      base64ToArrayBuffer(base64) {
            var binary_string = window.atob(base64);
            var len = binary_string.length;
            var bytes = new Uint8Array(len);
            for (var i = 0; i < len; i++) {
                  bytes[i] = binary_string.charCodeAt(i);
            }
            return bytes.buffer;
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
