import {Component} from '@angular/core';
import {Platform} from 'ionic-angular';
import {StatusBar, Splashscreen} from 'ionic-native';
import {TranslateService} from "../providers/translate-service";

import {TabsPage} from '../pages/tabs/tabs';


@Component({
      templateUrl: 'app.html'
})
export class MyApp {
      rootPage = TabsPage;

      constructor(platform: Platform, private _translate: TranslateService) {
            platform.ready().then(() => {
                  // Okay, so the platform is ready and our plugins are available.
                  // Here you can do any higher level native things you might need.
                  StatusBar.styleDefault();
                  Splashscreen.hide();

                  this._translate.use('es');
            });
      }
}
