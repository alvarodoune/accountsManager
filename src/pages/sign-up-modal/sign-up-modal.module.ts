import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignUpModal } from './sign-up-modal';

@NgModule({
  declarations: [
    SignUpModal,
  ],
  imports: [
    IonicPageModule.forChild(SignUpModal),
  ],
  exports: [
    SignUpModal
  ]
})
export class SignUpModalModule {}
