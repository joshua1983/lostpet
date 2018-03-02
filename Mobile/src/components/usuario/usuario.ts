import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'usuario',
  templateUrl: 'usuario.html'
})
export class UsuarioComponent {

  constructor(public afAuth: AngularFireAuth, public afDB: AngularFireDatabase) {
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.EmailAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }

}
