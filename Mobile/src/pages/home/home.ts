import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController, AlertController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { PerdidoPage } from '../perdido/perdido';
import { PerfilPage } from '../perfil/perfil';
import { MascotasService } from '../../servicios/mascotas.services';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})


export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  mapa:any;
  mascotas = [];
  autenticado:boolean;
  userProfile:any;
  paginaPerfil = PerfilPage;


  constructor(public navCtrl: NavController, 
              public geolocation:Geolocation,
              public modalCtr:ModalController,
              public alertCtr:AlertController,
              public mascotasService:MascotasService,
              public autenticacion:AngularFireAuth
            ) {
      
  }

  ionviewWillLoad(){
    this.autenticacion.authState.subscribe(data => console.log(data));
    this.autenticado = (this.autenticacion.auth != undefined) ;
  }

  ionViewDidLoad(){
    
    this.mascotasService.getMascotas().subscribe( mascotasData => {
      this.mascotas = mascotasData;
      this.showMap();
    } );
  }

  async openLogin(){
    try{
      const result = await this.autenticacion.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
      console.log(result);
      this.userProfile = result.user;
      this.autenticado = true;
    }catch(e){
      console.log(e);
      this.autenticado = false;
    }
  }
  salir(){
    this.autenticacion.auth.signOut();
    this.autenticado = false;
  }

  loadPerfil(){
    this.navCtrl.push(this.paginaPerfil,{
      perfilUsuario: this.userProfile
    })
  }


  showMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      const location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      const options = {
        center: location,
        zoom: 15,
        streetViewControl: false,
        mapTypeId: 'roadmap'
      }
  
      this.mapa = new google.maps.Map(this.mapRef.nativeElement, options);


      for (var i=0; i< this.mascotas.length; i++){
        let location = new google.maps.LatLng(this.mascotas[i].lat, this.mascotas[i].lng);
        this.addMarker(location, this.mapa, this.mascotas[i].descripcion, this.mascotas[i].dinero, this.mascotas[i].contacto, this.mascotas[i].foto);
      }
      
    });
    
    
  }

  agregarDesaparecido(){
    this.geolocation.getCurrentPosition().then((position) => {
      let nombre:string;
      let modal = this.modalCtr.create(PerdidoPage,{
        latitud: position.coords.latitude,
        longitud: position.coords.longitude,
        perfilUsuario: this.userProfile
      });
      modal.onDidDismiss((data) => {
        if (data != undefined){
          this.mensajeAlerta('LostPet', 'Registro guardado', ['Dismiss']);
          nombre = data.nombre;
          const location = new google.maps.LatLng(data.latitud, data.longitud);
          this.addMarker(location, this.mapa, nombre, data.dinero, data.contacto, '');
          this.mascotasService.agregarMascota(data.latitud, data.longitud,  nombre, data.dinero, data.contacto, data.uid)
        }
        
      })
      modal.present();
      
    })
    
  }

  addMarker(position, map, titulo, recompensa, telefono, foto){
    let infoWindow = new google.maps.InfoWindow({
      content: `<h2> `+titulo+` </h2> <p> Recompensa: $ `+recompensa.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")  +` <br> Contacto: `+telefono+` </p> <p> <img src='`+foto+`'  height="100px" width="150px" /> </p>`
    });
    let marcador = new google.maps.Marker({
      position: position,
      map: map,
      title: recompensa.toString(),
      icon: 'assets/icon/dog.png'
    });
    marcador.addListener('click', () => {
      infoWindow.open(this.mapa, marcador)
    });
    return marcador;
  }


  mensajeAlerta(titulo, subtitulo, botones) {
    let alert = this.alertCtr.create({
      title: titulo,
      subTitle: subtitulo,
      buttons: botones
    });
    alert.present();
  }
  

  

}
