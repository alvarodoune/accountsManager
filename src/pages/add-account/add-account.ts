import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Camera} from "@ionic-native/camera";

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

      constructor(public navCtrl: NavController,
                  public navParams: NavParams,
                  private camera: Camera) {
      }

      ionViewDidLoad() {
            console.log('ionViewDidLoad AddAccount');
      }

      picIcon() {

            this.camera.getPicture({
                  sourceType: 0,
                  mediaType: 0
            }).then(imageData => {
                  console.log(imageData);
                  this.iconURL = imageData;
                  let storageRef = this.storage.ref('icons/' + imageData.name);
                  let task = storageRef.put(imageData);

                  task.on("state_changed", (snapshot) => {
                        if (snapshot.bytesTransferred == snapshot.totalBytes) {
                              console.log("COMPLETE file upload!");
                        }
                  })
            })
                .catch((error: any) => {
                      console.log(error);
                });
      }
}
