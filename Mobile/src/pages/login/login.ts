import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrarPage } from '../registrar/registrar';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  correo:string;
  password:string;
  registrarPage = RegistrarPage;
  home = HomePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public autentica:AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  async entrar(){
    try{
      const result = await this.autentica.auth.signInWithEmailAndPassword(this.correo,this.password);
      console.log(result);
      if (result.uid){
        this.navCtrl.push(this.home);
      }
    }catch(e){
      console.log(e);
    }
    
  }

  openRegistrar(){
    this.navCtrl.push(this.registrarPage);
  }

}
