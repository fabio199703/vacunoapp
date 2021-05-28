import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SaladasPage } from './saladas';

@NgModule({
  declarations: [
    SaladasPage,
  ],
  imports: [
    IonicPageModule.forChild(SaladasPage),
  ],
})
export class SaladasPageModule {}
