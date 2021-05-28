import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-hambur',
  templateUrl: 'hambur.html',
})
export class HamburPage {
  hambur:any;
  loading:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private firebaseProvider:FirebaseProvider,
    private loadingController: LoadingController
    ) {
      this.gethambur();
      this.loading = this.loadingController.create();
      this.loading.present();
  }

  gethambur(){
    this.firebaseProvider.gethambur().then((r) => {
      this.hambur = r;
      this.loading.dismiss();
    })
  }
}
