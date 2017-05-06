import {Component} from '@angular/core';
import {NavParams, Platform, ViewController} from 'ionic-angular';
import {Account} from "../../classes/Account";

@Component({
      selector: 'page-account-modal',
      templateUrl: 'account-modal.html'
})
export class AccountModalPage {

      private account: Account;

      constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {
      }

      ionViewDidLoad() {
            let acc = this.params.get('account');
            console.log(acc);
            this.account = acc;
      }

      dismiss() {
            this.viewCtrl.dismiss();
      }
}
