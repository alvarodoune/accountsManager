import { AuthService } from '../../services/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera } from "@ionic-native/camera";
import { File } from '@ionic-native/file';

//region firebase imports
import firebase from 'firebase';
//endregion

@IonicPage()
@Component({
      selector: 'page-add-account',
      templateUrl: 'add-account.html',
})
export class AddAccount {

      iconURL: String;
      // Get a reference to the storage service, which is used to create references in your storage bucket
      storage = firebase.storage();
      // Create a storage reference from our storage service

      constructor(
            private auth: AuthService,
            private navCtrl: NavController,
            private navParams: NavParams,
            private camera: Camera,
            private file: File) {
      }

      ionViewDidLoad() {
            console.log('ionViewDidLoad AddAccount');
      }

      picIcon() {
            this.camera.getPicture({
                  sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
                  mediaType: this.camera.MediaType.ALLMEDIA,
                  destinationType: this.camera.DestinationType.DATA_URL, //return Data.URL is base64
                  targetHeight: 100,
                  targetWidth: 100,
                  correctOrientation: true
            }).then(base64Image => {
                  console.log(base64Image);
                  this.iconURL = base64Image;

                  let storageRef = this.storage.ref('icons/' + this.auth.uid);
                  let task = storageRef.put(this.base64ToArrayBuffer(base64Image));

                  task.on("state_changed", (snapshot) => {
                        if (snapshot.bytesTransferred == snapshot.totalBytes) {
                              console.log("COMPLETE file upload!");
                        }
                  });
            })
                  .catch((error: any) => {
                        console.log(error);
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
}
