import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Account} from "../classes/Account";

/*
  Generated class for the Accounts provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AccountsProvider {
  accounts: Account[] = [];

  constructor(public http: Http) {
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
