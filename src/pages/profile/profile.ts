import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from '../../providers/firebase';
import { AuthProvider  } from "../../providers/auth";

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
users:any;
loginpage ="LoginPage";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseProvider:FirebaseProvider,
    public auth : AuthProvider
   ) {
     this.getuser();
 }

 getuser(){
   this.firebaseProvider.getuser().then((r) => {
     this.users = r;
   })
 }
 cerrarSesion(){
  this.auth.logout();
}
}
