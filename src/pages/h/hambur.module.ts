import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HamburPage } from './hambur';

@NgModule({
  declarations: [
    HamburPage,
  ],
  imports: [
    IonicPageModule.forChild(HamburPage),
  ],
})
export class HamburPageModule {}
