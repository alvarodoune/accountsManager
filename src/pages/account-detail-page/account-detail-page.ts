import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Account} from "../../classes/Account";

@Component({
      selector: 'page-account-detail',
      templateUrl: 'account-detail-page.html'
})
export class AccountDetailPage {

      private account: Account;

      constructor(public navCtrl: NavController, public navParams: NavParams) {
      }

      ionViewDidLoad() {
            this.account = this.navParams.get('account');
            console.log(this.account);
      }

}
