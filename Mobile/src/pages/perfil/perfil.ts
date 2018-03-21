import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { MascotasService } from '../../servicios/mascotas.services';
/**
 * Generated class for the PerfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {

  perfilUsuario:any;
  mascotas=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public autenticacion:AngularFireAuth,
    public mascotasService:MascotasService) {
      this.perfilUsuario = navParams.get("perfilUsuario");
  }

  ionViewDidLoad() {
    this.loadMascotasUsuarios();
  }

  loadMascotasUsuarios(){
    this.mascotasService.getMascotasByUserID(this.perfilUsuario.uid).subscribe(mascotasData => {
      console.log(mascotasData);
      this.mascotas = mascotasData;
    });
  }

}
