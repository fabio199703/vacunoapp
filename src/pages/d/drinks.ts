import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-drinks',
  templateUrl: 'drinks.html',
})
export class DrinksPage {
  driks:any;
  loading:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private firebaseProvider:FirebaseProvider,
    private loadingController: LoadingController
    ) {
      this.getDriks();
      this.loading = this.loadingController.create();
      this.loading.present();
  }

  getDriks(){
    this.firebaseProvider.getDriks().then((r) => {
      this.driks = r;
      this.loading.dismiss();
    })
  }
}
