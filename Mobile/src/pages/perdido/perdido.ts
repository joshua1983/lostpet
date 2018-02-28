import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the PerdidoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-perdido',
  templateUrl: 'perdido.html',
})
export class PerdidoPage {
  lat:number;
  lng:number;
  descripcion:string;
  dinero:number;
  contacto:number;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewCtrl: ViewController) {
      this.lat = navParams.get("latitud");
      this.lng = navParams.get("longitud");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerdidoPage');
  }

  guardarRegistro(){
    let data = {
      nombre: this.descripcion,
      dinero: this.dinero,
      latitud: this.lat,
      longitud: this.lng,
      contacto: this.contacto
    }
    this.viewCtrl.dismiss(data);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}
