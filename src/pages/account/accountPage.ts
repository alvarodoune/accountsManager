import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AccountsProvider} from "../../providers/accountsProvider";
import {Account} from "../../classes/Account";
import {AccountDetailPage} from "../account-detail-page/account-detail-page";
//import {TranslateService} from "../../providers/translate-service";

@Component({
      selector: 'page-account',
      templateUrl: 'account.html',
      providers: [AccountsProvider]
})
export class AccountPage {
      protected accounts: Account;

      constructor(public navCtrl: NavController, protected account: AccountsProvider) {
            this.accounts = account.getAccounts("");
      }

      protected selectAccount(account: Account) {
            console.log(account.title);
            this.navCtrl.push(AccountDetailPage, {account: account});
      }
}
