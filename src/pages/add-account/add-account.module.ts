import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddAccount } from './add-account';

@NgModule({
  declarations: [
    AddAccount,
  ],
  imports: [
    IonicPageModule.forChild(AddAccount),
  ],
  exports: [
    AddAccount
  ]
})
export class AddAccountModule {}
