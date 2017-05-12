import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegisterUser } from './register-user';

@NgModule({
  declarations: [
    RegisterUser,
  ],
  imports: [
    IonicPageModule.forChild(RegisterUser),
  ],
  exports: [
    RegisterUser
  ]
})
export class RegisterUserModule {}
