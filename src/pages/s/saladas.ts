import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-saladas',
  templateUrl: 'saladas.html',
})
export class SaladasPage {
  saladas:any;
  loading:any;

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private firebaseProvider:FirebaseProvider,
    private loadingController: LoadingController
    ) {
      this.getsaladas();
      this.loading = this.loadingController.create();
      this.loading.present();
  }
  getsaladas(){
    this.firebaseProvider.getsaladas().then((r) => {
      this.saladas = r;
      this.loading.dismiss();
    })
  }
}