import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import firebase from 'firebase';
import { StatusBar, Splashscreen } from 'ionic-native';
import { TranslateService } from "../providers/translate-service";
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from './../pages/login-page/login-page';

@Component({
      templateUrl: 'app.html'
})
export class MyApp {
      rootPage: any = LoginPage;
      //loginPage = LoginPage;
      isAuthenticated: boolean = false;

      @ViewChild('nav') nav: NavController;

      constructor(platform: Platform, private _translate: TranslateService) {
            firebase.initializeApp({
                  apiKey: "AIzaSyAqT4OnMlyNF7o8ugH1aC9-O7HLlCMR97g",
                  authDomain: "accountsmanager-9fe12.firebaseapp.com"
                  // databaseURL: "https://accountsmanager-9fe12.firebaseio.com",
                  // projectId: "accountsmanager-9fe12",
                  // storageBucket: "accountsmanager-9fe12.appspot.com",
                  // messagingSenderId: "39165643463"
            });

            firebase.auth().onAuthStateChanged(user => {
                  if (user) {
                        this.isAuthenticated = true;
                        console.log("is auth");
                        this.rootPage = TabsPage;
                  } else {
                        console.log("not auth");
                        this.isAuthenticated = false;
                        this.rootPage = LoginPage;
                  }
                  this.nav.setRoot(this.rootPage);
            });

            platform.ready().then(() => {
                  // Okay, so the platform is ready and our plugins are available.
                  // Here you can do any higher level native things you might need.
                  StatusBar.styleDefault();
                  Splashscreen.hide();

                  this._translate.use('es');
            });
      }
}
