import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Account} from "../classes/Account";
import {AuthService} from "../services/auth";

@Injectable()
export class AccountsProvider {
      accounts: Account[] = [];

      constructor(public http: Http, protected auth: AuthService) {
            let response: Account[] = [];
            response.push(new Account("Ute", "Mi Cuenta UTW", "/100/100/"));
            response.push(new Account("Ose", "Mi cuenta UTE", "/100/100/animals"));
            response.push(new Account("Antel", "Antel de casa", "/100/100/"));
            response.push(new Account("Brou", "Cuenta dolares Brou", "/100/100/"));
            response.push(new Account("Brou", "Cuenta pesos", "/100/100/animals"));
            response.push(new Account("Santander Dolares", "Sueldo Infocorp", "/100/100/"));
            response.push(new Account("Santander Pesos", "Sueldo Infocorp", "/100/100/animals"));
            response.push(new Account("Itau", "Mi cuenta Itau", "/100/100/"));
            response.push(new Account("Santander", "Papa cuenta pesos", "/100/100/"));
            response.push(new Account("Santander", "Kata trabajo", "/100/100/"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            response.push(new Account("Ose", "test", "/100/100/animals"));
            this.accounts = response;
      }

      saveAccount(account: Account) {
            return firebase.database().ref('accounts/' + account.accountId).set({
                  accountId: account.accountId,
                  title: account.title,
                  name: account.name,
                  icon: account.icon
            });
      }

      saveAllAccounts() {
            const uid = this.auth.getActiveUser();
            this.http.put('https://accountsmanager-9fe12.firebaseio.com/' + uid + '/accounts-list.json', this.accounts);
      }

      getAccounts(input: any): any {
            //let response = Http.executeGet("Accounts/Accounts/MovementsFile", parameters, false, true).map(this.mapMovementsFileDataResponse.bind(this));
            //let response = Http.request("");
            return this.accounts;
      }

      mapMovementsFileDataResponse(info: any): any {
            let result = info;
            return result;
      }
}
