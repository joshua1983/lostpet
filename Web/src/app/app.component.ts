import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/observable';
import * as firebase from 'firebase/app';
import { MascotasService } from './servicios/mascotas.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  autenticado: boolean = false;
  usuario: any;
  

  constructor(public af: AngularFireAuth){
    this.af.authState.subscribe( (auth) =>{
      if (auth != null){
        this.usuario = auth;
        this.autenticado = true;
      }
    } );
  }

  login(){
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
    .then( (resultado) => {
      this.autenticado = true;
    }).catch((error) =>{
      console.log(error);
    });
    
  }

  logout(){
    this.af.auth.signOut();
    this.autenticado = false;
  }
}
