import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";

import {AlertController, LoadingController, NavParams, ViewController} from 'ionic-angular';
import {AuthService} from "../../services/auth";
import {User} from "../../classes/User";

/**
 * Generated class for the SignUpModal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
      selector: 'page-sign-up-modal',
      templateUrl: 'sign-up-modal.html',
})
export class SignUpModal {
      protected email: String;

      constructor(protected viewCtrl: ViewController,
                  protected navParams: NavParams,
                  protected loadingController: LoadingController,
                  protected authService: AuthService,
                  protected alertController: AlertController) {
      }

      ionViewDidLoad() {
            this.email = this.navParams.get('email');
            console.log('ionViewDidLoad SignUpModal');
      }

      protected signUp(form: NgForm) {
            let loading = this.loadingController.create({
                  //content: "loading..."
            });
            loading.present();
            this.authService.signUp(form.value.email, form.value.password)
                .then(
                    (data) => {
                          console.log(data);
                          let user = new User(data.uid, form.value.name, form.value.lastName, form.value.documentType, form.value.document, form.value.email, form.value.password, form.value.imageUrl = "/img/default.png");
                          loading.dismiss();
                          this.registerUser(user);
                          this.viewCtrl.dismiss();
                    })
                .catch(error => {
                      console.error(error);
                      loading.dismiss();
                      const alert = this.alertController.create({
                            title: "SignUp failed",
                            message: error.message,
                            buttons: ['ok']
                      });
                      alert.present();
                });
      }

      dismiss() {
            this.viewCtrl.dismiss();
            this.email = "";
      }

      protected registerUser(user: User) {
            this.authService.registerUser(user);
            // register.on('value', function(snapshot) {
            //       console.log(snapshot);
            // });
      }

      protected areEquals(form: NgForm): boolean {
            return form && form.value.password == form.value.repeat;
      }
}
