import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  pizzas:any;
  driks:any;
  fritas:any;
  hambur:any;
  saladas:any;
  loading:any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private firebaseProvider:FirebaseProvider,
    private loadingController: LoadingController
    ) {
      this.getpizzas();
      this.getDriks();
      this.getfritas();
      this.gethambur();
      this.getsaladas();
      this.loading = this.loadingController.create();
      this.loading.present();

  }

  getpizzas(){
    this.firebaseProvider.getpizzas().then((r) => {
      this.pizzas = r;
    })
  }
  getDriks(){
    this.firebaseProvider.getDriks().then((r) => {
      this.driks = r;
    
    })
  }

  getfritas(){
    this.firebaseProvider.getfritas().then((r) => {
      this.fritas = r;
    
    })
  }
  gethambur(){
    this.firebaseProvider.gethambur().then((r) => {
      this.hambur = r;
     
    })
  }
  getsaladas(){
    this.firebaseProvider.getsaladas().then((r) => {
      this.saladas = r;
      this.loading.dismiss();
    })
  }

}
