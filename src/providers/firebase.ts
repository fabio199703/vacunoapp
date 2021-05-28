import { Injectable } from "@angular/core";
import { AngularFirestore } from "angularfire2/firestore";

@Injectable()
export class FirebaseProvider {
  constructor(private afs: AngularFirestore) { }

  //Create user on firestore
  postUser = data =>
    this.afs
      .collection("Users")
      .doc(data.uid)
      .set(data);

  getUser(uid) {
    return this.afs.firestore.collection('Users').doc(uid)
      .get();
      
  }

  //GET PIZZAS
  getpizzas(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('pizzas').get()
      .then((r) => {
        let array =  [];
        r.forEach((d)=> {
          let item = d.data();
          item.id = d.id;
          array.push(item);
        });

        resolve(array);

      })
    } )
  }

  // GET DRINKS
  getDriks(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Driks').get()
      .then((r) => {
        let array =  [];
        r.forEach((d)=> {
          let item = d.data();
          item.id = d.id;
          array.push(item);
        });

        resolve(array);

      })
    } )
  }
  
  // GET Fritas
  getfritas(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('fritas').get()
      .then((r) => {
        let array =  [];
        r.forEach((d)=> {
          let item = d.data();
          item.id = d.id;
          array.push(item);
        });

        resolve(array);

      })
    } )
  }

  // GET hambur
  gethambur(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('hambur').get()
      .then((r) => {
        let array =  [];
        r.forEach((d)=> {
          let item = d.data();
          item.id = d.id;
          array.push(item);
        });

        resolve(array);

      })
    } )
  }

  // GET saladas
  getsaladas(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('saladas').get()
      .then((r) => {
        let array =  [];
        r.forEach((d)=> {
          let item = d.data();
          item.id = d.id;
          array.push(item);
        });

        resolve(array);

      })
    } )
  }


  getuser(){
    return new Promise((resolve, reject) =>{
      this.afs.firestore.collection('Users').get()
      .then((r) => {
        let array =  [];
        r.forEach((d)=> {
          let item = d.data();
          item.id = d.id;
          array.push(item);
        });

        resolve(array);

      })
    } )
  }


  
}
