import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NavController, NavParams, LoadingController, AlertController, ModalController} from 'ionic-angular';

import {AuthService} from './../../services/auth';
import {SignUpModal} from "../sign-up-modal/sign-up-modal";

@Component({
      selector: 'page-login',
      templateUrl: 'login-page.html'
})
export class LoginPage {

      constructor(private modalCtrl: ModalController,
                  private navParams: NavParams,
                  private authService: AuthService,
                  private loadingController: LoadingController,
                  private alertController: AlertController) {
            console.log("login page constructor")
      }

      ionViewDidLoad() {
            console.log('ionViewDidLoad LoginPagePage');
      }

      protected signIn(form: NgForm) {
            let loading = this.loadingController.create({
                  content: "loading..."
            });
            loading.present();
            this.authService.signIn(form.value.email, form.value.password)
                .then(
                    (data) => {
                          console.log(data);
                          loading.dismiss();
                    })
                .catch(error => {
                      loading.dismiss();
                      const alert = this.alertController.create({
                            title: "SignUp failed",
                            message: error.message,
                            buttons: ['ok']
                      });
                      alert.present();
                });
      }

      protected signUpClick(): void {
            let modal = this.modalCtrl.create(SignUpModal, { "email": 'alvarod@gmail.com' });
            modal.present();
      }
}
