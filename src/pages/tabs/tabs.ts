import {Component} from '@angular/core';

import {HomePage} from '../home/home';
import {AboutPage} from '../about/about';
import {AccountPage} from '../account/accountPage';
import {SettingsPage} from "../settings/settingsPage";

@Component({
      templateUrl: 'tabs.html'
})
export class TabsPage {
      // this tells the tabs component which Pages
      // should be each tab's root Page
      home: any = HomePage;
      about: any = AboutPage;
      account: any = AccountPage;
      settings: any = SettingsPage;

      constructor() {
            console.log("tabs page constructor");
      }
}
