import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth'
import { AgmCoreModule } from '@agm/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { MaterializeModule } from 'angular2-materialize';
import { MapaComponent } from './mapa/mapa.component';

import { MascotasService } from './servicios/mascotas.services';
import { ReportarComponent } from './reportar/reportar.component';
import { AppRoutingModule } from './app.routes';
import { InicioComponent } from './inicio/inicio.component';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AyudaComponent } from './ayuda/ayuda.component';


export const firebaseConfig = {
  apiKey: "AIzaSyC6zxtjlt16qFvkK61BPfHjy7fW8FfEL30",
  authDomain: "mascotas-1497482247269.firebaseapp.com",
  databaseURL: "https://mascotas-1497482247269.firebaseio.com",
  storageBucket: "mascotas",
  messagingSenderId: "53105126957"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroComponent,
    MapaComponent,
    ReportarComponent,
    InicioComponent,
    MensajesComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC6zxtjlt16qFvkK61BPfHjy7fW8FfEL30'
    }),
    AppRoutingModule,
    FormsModule
  ],
  providers: [AngularFireAuth,
              AngularFireDatabase, 
              MascotasService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
