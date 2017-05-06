import {Component} from '@angular/core';
import {NgForm} from "@angular/forms";
import {NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';

import {AuthService} from './../../services/auth';

@Component({
      selector: 'page-login',
      templateUrl: 'login-page.html'
})
export class LoginPage {

      constructor(private navCtrl: NavController,
                  private navParams: NavParams,
                  private authService: AuthService,
                  private loadingController: LoadingController,
                  private alertController: AlertController) {
            console.log("login page constructor")
      }

      ionViewDidLoad() {
            console.log('ionViewDidLoad LoginPagePage');
      }

      protected signUp(form: NgForm) {
            let loading = this.loadingController.create({
                  content: "loading..."
            });
            loading.present();
            this.authService.signUp(form.value.email, form.value.password)
                .then(
                    (data) => {
                          loading.dismiss();
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
}
