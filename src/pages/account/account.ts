import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AccountsProvider} from "../../providers/accountsProvider";
import {Account} from "../../classes/Account";

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

  private selectAccount(account: Account) {
    console.log(account.title);
  }
}
