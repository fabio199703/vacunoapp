import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-fritas',
  templateUrl: 'fritas.html',
})
export class FritasPage {
  fritas:any;
  loading:any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private firebaseProvider:FirebaseProvider,
    private loadingController: LoadingController
    ) {
      this.getfritas();
      this.loading = this.loadingController.create();
      this.loading.present();
  }

  getfritas(){
    this.firebaseProvider.getfritas().then((r) => {
      this.fritas = r;
      this.loading.dismiss();
    })
  }
}
