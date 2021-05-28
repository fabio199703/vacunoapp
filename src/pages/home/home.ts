import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  pizzas:any = [];
  menupage ="MenuPage";
  HamburPage="HamburPage";
  saladaspage="SaladasPage";
  fritaspage = "FritasPage";
  drikspage ="DrinksPage";
  profile ="ProfilePage";

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     private firebaseProvider:FirebaseProvider,
     ) {
      this.getpizzas();
    
  }
  getpizzas(){
    this.firebaseProvider.getpizzas().then((r) => {
      this.pizzas = r;
    })
   
}
}
