import { AuthService } from './../../services/auth';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'page-login',
  templateUrl: 'login-page.html'
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPagePage');
  }

  private signUp(form: NgForm) {
    this.authService.signUp(form.value.email, form.value.password)
      .then(
      (data) => {
        console.log(data)
      })
      .then(error => console.log(error));
  }

  private signIn(form: NgForm) {
    this.authService.signIn(form.value.email, form.value.password)
      .then(
      (data) => {
        console.log(data)
      })
      .then(error => console.log(error));
  }
}
