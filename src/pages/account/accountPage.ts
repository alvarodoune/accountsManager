import {Component} from '@angular/core';
import {NavController, ModalController} from 'ionic-angular';
import {AccountsProvider} from "../../providers/accountsProvider";
import {Account} from "../../classes/Account";
import {AccountDetailPage} from "../account-detail-page/account-detail-page";
import {AccountModalPage} from "../account-modal/account-modal";
import * as firebase from "firebase/app";
import AuthProvider = firebase.auth.AuthProvider;
import {AuthService} from "../../services/auth";

@Component({
      selector: 'page-account',
      templateUrl: 'accountPage.html',
      providers: [AccountsProvider]
})
export class AccountPage {
      protected accounts: Account[];

      constructor(protected navCtrl: NavController,
                  public modalCtrl: ModalController,
                  protected accountProvider: AccountsProvider) {
            this.accounts = accountProvider.getAccounts("");
      }

      protected selectAccount(account: Account) {
            console.log(account.title);
            this.navCtrl.push(AccountDetailPage, {account: account});
      }

      protected openModal(account: Account) {
            console.log(account.title);
            let modal = this.modalCtrl.create(AccountModalPage, {"account": account});
            modal.present();
      }

      protected saveAllAccounts() {
            this.accountProvider.saveAllAccounts();
      }

      protected searchAccount(ev) {
            // Reset items back to all of the items
            this.accounts = this.accountProvider.getAccounts("");

            // set val to the value of the ev target
            var val = ev.target.value;

            // if the value is an empty string don't filter the items
            if (val && val.trim() != '') {
                  this.accounts = this.accounts.filter((item) => {
                        return (item.name.toLowerCase()).indexOf(val.toLowerCase()) > -1 || (item.title.toLowerCase()).indexOf(val.toLowerCase()) > -1;
                  })
            }
      }
}
