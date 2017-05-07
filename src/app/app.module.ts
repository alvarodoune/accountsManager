//region Angular-Ionic imports
import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
//endregion

import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {AccountPage} from '../pages/account/accountPage';
import {AccountDetailPage} from '../pages/account-detail-page/account-detail-page';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {TranslatePipe} from "../pipes/translationPipe";
import {TranslateService} from "../providers/translate-service";
import {TRANSLATION_PROVIDERS} from "../providers/translations";
import {AccountModalPage} from "../pages/account-modal/account-modal";
import {AuthService} from "../services/auth";
import {LoginPage} from '../pages/login-page/login-page';
import {SettingsPage} from '../pages/settings/settingsPage';
import {LoadingPage} from '../pages/loading/loading';
import {SignUpPage} from "../pages/sign-up/sign-up";

@NgModule({
      declarations: [
            TranslatePipe,
            MyApp,
            AboutPage,
            AccountPage,
            AccountDetailPage,
            AccountModalPage,
            SettingsPage,
            LoginPage,
            SignUpPage,
            LoadingPage,
            HomePage,
            TabsPage
      ],
      imports: [
            BrowserModule,
            HttpModule,
            IonicModule.forRoot(MyApp)
      ],
      bootstrap: [IonicApp],
      entryComponents: [
            MyApp,
            AboutPage,
            AccountPage,
            AccountDetailPage,
            AccountModalPage,
            SettingsPage,
            LoginPage,
            SignUpPage,
            LoadingPage,
            HomePage,
            TabsPage
      ],
      providers: [
            StatusBar,
            SplashScreen,
            {
                  provide: ErrorHandler, useClass: IonicErrorHandler
            },
            AuthService,
            TranslateService,
            TRANSLATION_PROVIDERS
      ]
})
export class AppModule {
}
