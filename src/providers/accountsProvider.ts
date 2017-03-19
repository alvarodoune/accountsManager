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
    response.push(new Account("Ute", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Antel", "ionic"));
    response.push(new Account("Brou Dolares", "ionic"));
    response.push(new Account("Brou Pesos", "ionic"));
    response.push(new Account("Santander Dolares", "ionic"));
    response.push(new Account("Santander Pesos", "ionic"));
    response.push(new Account("Itau", "ionic"));
    response.push(new Account("Papa cuenta pesos", "ionic"));
    response.push(new Account("Kata trabajo", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Ose", "ionic"));
    response.push(new Account("Ose", "ionic"));
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
