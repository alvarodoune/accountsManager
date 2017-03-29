import {NgModule, ErrorHandler} from '@angular/core';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {AccountPage} from '../pages/account/accountPage';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {TranslatePipe} from "../pipes/translationPipe";
import {TranslateService} from "../providers/translate-service";
import {TRANSLATION_PROVIDERS} from "../providers/translations";

@NgModule({
      declarations: [
            TranslatePipe,
            MyApp,
            AboutPage,
            AccountPage,
            HomePage,
            TabsPage
      ],
      imports: [
            IonicModule.forRoot(MyApp)
      ],
      bootstrap: [IonicApp],
      entryComponents: [
            MyApp,
            AboutPage,
            AccountPage,
            HomePage,
            TabsPage
      ],
      providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, TranslateService, TRANSLATION_PROVIDERS]
})
export class AppModule {
}
